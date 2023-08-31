import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Zinc',
            data: [33, 22, 521, 535, 643, 1345, 345, 2341, 123],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Coal',
            data: [2441, 2423, 2561, 1515, 1435, 1135, 3456, 1234, 1213],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Sulphur',
            data: [3322, 1322, 1121, 1135, 1163, 1145, 1345, 1241, 1123],
            borderColor: 'rgb(235, 146, 52)',
            backgroundColor: 'rgba(235, 146, 52, 0.5)',
        }
    ],
};
const Graph = () => {

    return (
        <Line data={data} option={options} style={{height:"100%", width:"100%"}} />
    )
}



export default Graph
