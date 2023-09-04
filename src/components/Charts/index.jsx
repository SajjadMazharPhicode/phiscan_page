import React from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2';
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
    ArcElement,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
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
            // text: 'Chart.js Bar Chart - Stacked',
        },
    },
    // scales: {
    //     x: {
    //         stacked: false
    //     },
    //     y: {
    //         stacked: false
    //     }
    // }
};

const getLabels = (type) => {
    if (type === 0) {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep'];
    } else if (type === 1) {
        return ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
    } else if (type === 2) {
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
}

export const LineChart = ({ data, lineTimeLabel }) => {
    data = {
        labels: getLabels(parseInt(lineTimeLabel)),
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
        <Line data={data} options={options} style={{ height: "100%", width: "100%" }} />
    )
}


export const BarChart = ({ data, barTimeLabel }) => {
    data = {
        labels: getLabels(parseInt(barTimeLabel)),
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
        <Bar data={data} options={options} style={{ height: "100%", width: "100%" }} />

    )
}

export const DoughnutChat = ({ materialInfo, totalCapacity }) => {
    // options.plugins.legend.position = 'right'
    const data = {
        labels: [...materialInfo.materials],
        datasets: [
            {
                label: 'volume',
                data: [...materialInfo.volumes],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    return <Doughnut data={data} options={options} />
}


