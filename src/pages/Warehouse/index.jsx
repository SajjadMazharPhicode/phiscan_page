import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import dataContext from '../../context/DataContext'
import Card from '../../components/Card'
import './warehouse.css'
import {useLocation} from 'react-router-dom'
import Graph from '../../components/Graph'

const Warehouse = () => {
    // const [searchParams] = useSearchParams()
    const {state} = useLocation()
    const { isCollapsed, hideCard, wareHouseDetails } = useContext(dataContext)
    const [currentDetail, setCurrentDetail] = useState(wareHouseDetails[0])
    console.log(state)

    useEffect(()=>{
        const id = state?.id || 0
        const curr = wareHouseDetails.find(d => d.id === id)
        setCurrentDetail(curr)
    },[state])

    return (
        <div style={{height:"100vh", width:"100vw"}}>
            {/* <div>
                <Navbar isCollapsed={isCollapsed} hideCard={hideCard} />
                <Card wareHouseDetails={wareHouseDetails} isCollapsed={isCollapsed} pageId={"warehouse"} />
            </div> */}
            <div className='flex justify-end h-full'>

            <div style={{height:"100%", width:"80%"}} className='grid grid-cols-2 gap-3 mr-10'>
                <div style={{height:"40%"}}> 
                    <div className='block cursor-pointer text-xs p-6 bg-white border flex-col border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md' style={{height:"100%", width:"100%"}}>
                        <Graph />
                    </div>
                    <div className='block cursor-pointer text-xs p-6 bg-white border flex-col border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md' style={{height:"100%", width:"100%"}}></div>
                </div>
                <div style={{height:"40%"}}> 
                    <div className='block cursor-pointer text-xs p-6 bg-white border flex-col border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md' style={{height:"100%", width:"100%"}}></div>
                    <div className='block cursor-pointer text-xs p-6 bg-white border flex-col border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md' style={{height:"100%", width:"100%"}}></div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Warehouse
