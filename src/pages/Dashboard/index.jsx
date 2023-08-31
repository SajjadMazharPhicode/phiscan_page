import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import dataContext from '../../context/DataContext'
import Card from '../../components/Card'
import './dashboard.css'
import { useLocation } from 'react-router-dom'
import { BarChart, LineChart } from '../../components/Charts'

const Dashboard = () => {
    // const [searchParams] = useSearchParams()
    const { state } = useLocation()
    const { isCollapsed, hideCard, wareHouseDetails,setWarehouseDetails } = useContext(dataContext)
    const [currentDetail, setCurrentDetail] = useState(wareHouseDetails[0])
    console.log(currentDetail)


    const randomizeData = (len) => {
        let arr = [];
        for (let i = 1; i <= len; i++) {
        arr.push(Math.round(Math.random() * 1000));
        }
        return arr;
    };

    useEffect(()=>{
        console.log("-------------------->")

        const updatedWareDetails = wareHouseDetails.map(el=>{
            const prevMatData = el.previousData.material.map(mat=>{
                const randArr = randomizeData(10)
                mat.monthlyVol = randArr;
                return mat
            })
            el.previousData.material = prevMatData
            return el;
        })
        console.log("-------------------->",updatedWareDetails)
        setWarehouseDetails(updatedWareDetails)
    },[])

    useEffect(() => {
        const id = state?.id || 0
        const curr = wareHouseDetails.find(d => d.id === id)
        setCurrentDetail(curr)
    }, [state])

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <div>
                <Navbar isCollapsed={isCollapsed} hideCard={hideCard} />
                <Card wareHouseDetails={wareHouseDetails} isCollapsed={isCollapsed} pageId={"warehouse"} />
            </div>
            <div className='flex justify-end h-full'>

                <div style={{ height: "100%", width: isCollapsed ? '100%' : '80%'  }} className='dashboard_container grid grid-cols-2 gap-3 mr-10'>
                    <div style={{ height: "40%" }}>
                        <div className='flex justify-center cursor-pointer text-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md' style={{ height: "100%", width: "100%" }}>
                            <LineChart data={currentDetail.previousData.material} />
                        </div>
                        <div className='block cursor-pointer text-xs p-6 bg-white border flex-col border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md' style={{ height: "100%", width: "100%" }}>
                        </div>
                    </div>
                    <div style={{ height: "40%" }}>
                        <div className='flex justify-center cursor-pointer text-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md' style={{ height: "100%", width: "100%" }}>
                            <BarChart data={currentDetail.previousData.material} />
                        </div>
                        <div className='block cursor-pointer text-xs p-6 bg-white border flex-col border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md' style={{ height: "100%", width: "100%" }}>{currentDetail?.warehouse}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
