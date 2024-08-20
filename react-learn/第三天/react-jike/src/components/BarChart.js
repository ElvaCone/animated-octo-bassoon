import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const BarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // 初始化图表实例
        const chart = echarts.init(chartRef.current);

        // 配置图表的选项
        const option = {
            title: {
                text: '柱状图示例',
                subtext: '包含销售额和利润率'
            },
            tooltip: {
                trigger: 'axis',
                // trigger: 'item',
                axisPointer: { type: 'shadow' } // 直角坐标系内的阴影指示器
                // axisPointer: { type: 'line' }
                // axisPointer: { type: 'cross' }
            },
            legend: {
                data: ['销售额', '利润率']
            },
            xAxis: {
                type: 'category',
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
                axisLabel: {
                    rotate: 45 // 旋转 x 轴标签
                }
            },
            yAxis: [
                {
                    type: 'value',
                    name: '销售额',
                    position: 'left'
                },
                {
                    type: 'value',
                    name: '利润率',
                    position: 'right',
                    axisLine: { show: false },
                    axisLabel: { formatter: '{value} %' }
                }
            ],
            series: [
                {
                    name: '销售额',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20],
                    itemStyle: {
                        color: '#3398DB' // 柱状图的颜色
                    },
                    yAxisIndex: 0
                },
                {
                    name: '利润率',
                    type: 'line',
                    data: [10, 20, 30, 15, 25, 35],
                    yAxisIndex: 1,
                    lineStyle: {
                        color: '#FF5722'
                    },
                    symbol: 'circle',
                    symbolSize: 8
                }
            ]
        };

        // 使用配置项填充图表
        chart.setOption(option);

        // 清理图表实例
        return () => {
            chart.dispose();
        };
    }, []);

    return (
        <div
            ref={chartRef}
            style={{ width: '600px', height: '400px' }}
        ></div>
    );
};

export default BarChart;
