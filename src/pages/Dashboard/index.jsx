import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import dataContext from '../../context/DataContext'
import Card from '../../components/Card'
import './dashboard.css'
import { useLocation } from 'react-router-dom'
import { BarChart, DoughnutChat, LineChart } from '../../components/Charts'
import MapBox from '../../components/MapBox'
import Carousel from '../../components/Carousel/Carousel'


const Dashboard = () => {
    // const [searchParams] = useSearchParams()
    const { state } = useLocation()
    const { isCollapsed, hideCard, wareHouseDetails, setWarehouseDetails } = useContext(dataContext)
    const [currentDetail, setCurrentDetail] = useState(wareHouseDetails[0])
    const [lineTimeLabel, setLineTimeLabel] = useState('0')
    const [barTimeLabel, setBarTimeLabel] = useState('0')



    const randomizeData = (len) => {
        let arr = [];
        for (let i = 1; i <= len; i++) {
            arr.push(Math.round(Math.random() * 1000));
        }
        return arr;
    };

    useEffect(() => {
        console.log("-------------------->")

        const updatedWareDetails = wareHouseDetails.map(el => {
            const prevMatData = el.previousData.material.map(mat => {
                const randArr = randomizeData(10)
                mat.monthlyVol = randArr;
                return mat
            })
            el.previousData.material = prevMatData
            return el;
        })
        console.log("-------------------->", updatedWareDetails)
        setWarehouseDetails(updatedWareDetails)
    }, [])

    useEffect(() => {
        const id = state?.id || 0
        const curr = wareHouseDetails.find(d => d.id === id)
        setCurrentDetail(curr)
    }, [state])

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <div>
                <Navbar isCollapsed={isCollapsed} hideCard={hideCard} />
                <Card wareHouseDetails={wareHouseDetails} isCollapsed={isCollapsed} pageId={"warehouse"} />
            </div>
            <div className='flex justify-end'>
                <div style={{ height: "100%", width: isCollapsed ? '100%' : '75vw' }} className='dashboard_container grid grid-cols-4 gap-3 mr-10 '>
                    <div className='flex justify-center cursor-pointer text-xs p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mt-4 ml-4 shadow-md col-span-3' style={{ height: isCollapsed ? '96%' : '96%', }}>
                        <LineChart data={currentDetail.previousData.material} lineTimeLabel={lineTimeLabel} />
                        <DoughnutChat materialInfo={currentDetail.materialInfo} totalCapacity={currentDetail.totalCapacity} />
                    </div>
                    <div key={currentDetail.id} className='flex-row justify-center cursor-pointer text-xs p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md' style={{ height: '95%' }}>
                        <MapBox sstyle={{ height: "100%", width: "100% !important" }} zoom={5.5} from={'dashboard'} wareHouseDetails={[currentDetail]} />

                    </div>

                    <div className='flex justify-center cursor-pointer text-xs p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md col-span-2' style={{ height: isCollapsed ? '64%' : '75%' }}>
                        <Carousel sliderImages={currentDetail.images} />
                    </div>
                    <div className='flex justify-center cursor-pointer text-xs p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md col-span-2 items-center' style={{ height: isCollapsed ? '64%' : '75%' }}>
                        <BarChart data={currentDetail.previousData.material} barTimeLabel={barTimeLabel} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard