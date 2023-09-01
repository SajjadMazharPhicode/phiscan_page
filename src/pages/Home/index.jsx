import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import MapBox from '../../components/MapBox'
import dataContext from '../../context/DataContext'

const initWarehouseData = [
    {
        id: 0,
        hover: false,
        totalCapacity: 1000,
        warehouse: "warehouse-1",
        address:"Kolkata",
        location:{lat:22.5726, lng:88.3639},
        basicInfo: {
            currentStatus: "active",
            lastUpdated: "2:30 PM (25/08/2023)",
            vacantCapacity: 500
        },
        materialInfo: {
            materials: ["Sulphur", "Zinc", "Coal"],
            volumes: [23, 43, 54]
        }
    },
    {
        id: 1,
        hover: false,
        totalCapacity: 1000,
        warehouse: "warehouse-2",
        address:"Bengaluru",
        location:{lat:12.9716, lng:77.5946},
        basicInfo: {
            currentStatus: "running",
            lastUpdated: "3:30 PM (23/08/2023)",
            vacantCapacity: 100
        },
        materialInfo: {
            materials: ["Sulphur", "Zinc", "Coal"],
            volumes: [232, 41, 24]
        }
    },
    {
        id: 2,
        hover: false,
        totalCapacity: 1000,
        warehouse: "warehouse-3",
        address:"Visakhapatnam",
        location:{lat:17.6868, lng:83.2185},
        basicInfo: {
            currentStatus: "running",
            lastUpdated: "3:31 PM (13/08/2023)",
            vacantCapacity: 800
        },
        materialInfo: {
            materials: ["Sulphur", "Zinc"],
            volumes: [232, 41]
        }
    },
    {
        id: 3,
        hover: false,
        totalCapacity: 1000,
        warehouse: "warehouse-4",
        address:"Delhi",
        location:{lat:28.7041, lng:77.1025},
        basicInfo: {
            currentStatus: "running",
            lastUpdated: "3:31 PM (13/08/2023)",
            vacantCapacity: 0
        },
        materialInfo: {
            materials: ["Sulphur", "Zinc"],
            volumes: [232, 410]
        }
    }
]


const Home = () => {
    // const [wareHouseDetails, setWarehouseDetails] = useState(initWarehouseData)
    // const [isCollapsed, setIsCollapsed] = useState(false)
    const {wareHouseDetails,setWarehouseDetails, isCollapsed, setIsCollapsed} = useContext(dataContext)
    
    const hideCard = () => {
        document.querySelector(".card_container").classList.toggle('closed')
        setIsCollapsed(!isCollapsed)
    }
    useEffect(()=>{
        const updateWareVacCap = wareHouseDetails?.map(detail=>{
            detail.basicInfo.vacantCapacity = detail.totalCapacity - detail.materialInfo.volumes.reduce((acc, curr)=> acc+curr, 0)
            return detail
        })
        setWarehouseDetails(updateWareVacCap)
    },[])
    return (
        <>
            <Navbar isCollapsed={isCollapsed} hideCard={hideCard} />
            {/* <MapView wareHouseDetails={wareHouseDetails} /> */}
            <MapBox sstyle={{ height: '100vh', width: '100vw' }} zoom={4.5} wareHouseDetails={wareHouseDetails} setWarehouseDetails={setWarehouseDetails} />
            <Card wareHouseDetails={wareHouseDetails} isCollapsed={isCollapsed} />
        </>
    )
}

export default Home