import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import dataContext from '../../context/DataContext'
import Card from '../../components/Card'
import './dashboard.css'
import { useLocation } from 'react-router-dom'
import { BarChart, DoughnutChat, LineChart } from '../../components/Charts'
import MapBox from '../../components/MapBox'


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
    }, [wareHouseDetails])

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

                <div style={{ height: "100%", width: isCollapsed ? '100%' : '75vw' }} className='dashboard_container grid grid-cols-2 gap-3 mr-10'>
                    <div style={{ height: "40%" }}>
                        <div className='flex-row justify-center cursor-pointer text-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md' style={{ height: "100%", width: "100%" }}>
                            <div style={{ width: "100%", height: "10%" }} className='flex justify-end'>
                                <select name="chart_selector" onChange={(e)=> setLineTimeLabel(e.target.value)} className="chart_selectro outline-none rounded">
                                    <option value="0" defaultValue="0">Monthly</option>
                                    <option value="1" >Yearly</option>
                                    <option value="2" >Daily</option>
                                </select>
                            </div>
                            <div style={{ width: "100%", height: "90%" }} className='flex justify-center'>
                                <LineChart data={currentDetail.previousData.material} lineTimeLabel={lineTimeLabel} />
                            </div>
                        </div>
                        <div className='flex justify-center cursor-pointer text-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md' style={{ height: "100%", width: "100%" }}>
                            <DoughnutChat materialInfo={currentDetail.materialInfo} totalCapacity={currentDetail.totalCapacity} />
                        </div>
                    </div>
                    <div style={{ height: "40%" }}>

                        <div className='flex-row justify-center cursor-pointer text-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md' style={{ height: "100%", width: "100%" }}>
                            <div style={{ width: "100%", height: "10%" }} onChange={(e)=> setBarTimeLabel(e.target.value)} className='flex justify-end'>
                                <select name="chart_selector" className='chart_selectro outline-none rounded'>
                                    <option value="0" defaultValue="0">Monthly</option>
                                    <option value="1">Yearly</option>
                                    <option value="2">Daily</option>
                                </select>
                            </div>
                            <div style={{ width: "100%", height: "90%" }} className='flex justify-center'>

                                <BarChart data={currentDetail.previousData.material} barTimeLabel={barTimeLabel} />
                            </div>
                        </div>
                        <div key={currentDetail.id} className='flex flex-1 cursor-pointer text-xs bg-white border flex-col border-gray-200 rounded-lg shadow m-4 hover:bg-gray-100 shadow-md' style={{ height: "100%", width: "100%", overflowX:'hidden' }}>
                            <div style={{width:"58rem", height:"100%"}}>
                                <MapBox sstyle={{height:"100%", width:"100% !important"}} zoom={5.5} from={'dashboard'} wareHouseDetails={[currentDetail]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
