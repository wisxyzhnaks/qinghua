<template>

    <div :style="{ width: '90%', height: '80vh',margin: '10px auto' }">
		<Echarts :option="option" style="width:100%; height:100%" />
	</div>
</template>

<script setup lang="ts">

import { reactive,getCurrentInstance,onMounted,ref } from 'vue';
import Echarts from '@/components/ReEcharts/index.vue';

let that = getCurrentInstance().appContext.config.globalProperties;

function contains(arr: string | any[], val: any) {
	var i = arr.length;
	while (i--) {
		if (arr[i].name === val) {
			return i;
		}
	}
	return false;
}

let list = reactive([
	{
		name: '北方',
		max: 100
	},
	{
		name: '西北',
		max: 100
	},
	{
		name: '西方',
		max: 100
	},
	{
		name: '西南',
		max: 100
	},
	{
		name: '东方',
		max: 100
	},
	{
		name: '东南',
		max: 100
	}
]);
let data1 = reactive([60, 60, 65, 60, 70, 40]);

const option = reactive({
	backgroundColor: '#FFFFFF',
	tooltip: {
		show: true,
		trigger: 'item',
		formatter: (data: { seriesName: any; seriesIndex: number; value: any[] }) => {
			// console.log(data.seriesIndex);
			var tip = data.seriesName;
			let tmpData: number[] = [];
			if (data.seriesIndex === 0) {
				tmpData = data1;
			}
			console.log(tmpData);
			data.value.forEach((item: any, index: string | number) => {
				tip += '<div>';
				tip += '<div>' + list[index].name + ': ' + tmpData[index] + '</div>';
				tip += '</div>';
			});
			return tip;
		}
	},
	radar: {
		axisName: {
			color: '#2273DA',
			fontSize: 16,
			rich: {
				a: {
					fontSize: 16,
					color: '#ACD3FF'
					// padding: [0, 0, 8, 0]
				},
				b: {
					fontSize: 16,
					color: '#ACD3FF'
				}
			},
			formatter: (a: any) => {
				let i = contains(list, a); // 处理对应要显示的样式
				return `{a| ${a}}{b|(${data1[i]})}`;
			}
		},
		center: ['50%', '50%'],
		radius: '70%',
		startAngle: 90,
		splitNumber: 4,
		splitArea: {
			areaStyle: {
				color: ['rgba(50, 72, 130, 0.7)', 'rgba(50, 72, 130, 0.5)', 'rgba(50, 72, 130, 0.6)']
			}
		},
		axisLabel: {
			show: false
		},
		axisLine: {
			show: false
		},
		splitLine: {
			show: true,
			lineStyle: {
				color: 'rgba(50, 72, 130, 0.4)'
			}
		},
		indicator: list
	},
	series: [
		{
			axisName: '数据',
			type: 'radar',
			symbol: 'circle',
			symbolSize: 10,
			itemStyle: {
				color: 'rgba(19, 173, 255, 1)',
				borderColor: 'rgba(19, 173, 255, 0.4)',
				borderWidth: 10
			},

			label: {
				show: true,
				formatter: (params: { value: any }) => {
					return params.value;
				},
				color: '#fff'
			},
			areaStyle: {
				color: {
					type: 'linear',
					x: 0, // 右
					y: 1, // 下
					x2: 0, // 左
					y2: 0, // 上
					colorStops: [
						{
							offset: 0,
							color: 'rgba(82, 247, 242, 1)'
						},
						{
							offset: 1,
							color: 'rgba(65, 105, 213, 1)'
						}
					]
				}
			},
			data: [
				{
					value: data1
				}
			]
		}
	]
});

onMounted(()=>{
    that.$http.getEtu().then(res=>{
        list.length = 0;
        data1.length = 0;

        res.forEach(item=>{
            let obj = {
                name:item.context,
                max:item.number + 100
            }
            list.push(obj);
            data1.push(item.number);
        })
    })
})
</script>

<style>

</style>