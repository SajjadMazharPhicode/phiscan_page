import React from 'react'
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
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
    BarElement,
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

export const LineChart = ({data}) => {
    data = {
        labels,
        datasets: [
            {
                label: data[0].name,
                data: data[0].monthlyVol,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: data[1].name,
                data: data[1].monthlyVol,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: data[2].name,
                data: data[2].monthlyVol,
                borderColor: 'rgb(235, 146, 52)',
                backgroundColor: 'rgba(235, 146, 52, 0.5)',
            }
        ],
    };

    return (
        <Line data={data} option={options} style={{height:"100%", width:"100%"}} />
    )
}


export const BarChart = ({data}) => {
    data = {
        labels,
        datasets: [
            {
                label: data[0].name,
                data: data[0].monthlyVol,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: data[1].name,
                data: data[1].monthlyVol,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: data[2].name,
                data: data[2].monthlyVol,
                borderColor: 'rgb(235, 146, 52)',
                backgroundColor: 'rgba(235, 146, 52, 0.5)',
            }
        ],
    };
  return (
    <Bar data={data} option={options} style={{height:"100%", width:"100%"}} />
    
  )
}





