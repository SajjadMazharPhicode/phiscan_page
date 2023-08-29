import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MapView from '../components/MapView'
import Card from '../components/Card'
import MapBox from '../components/MapBox/MapBox'

const initWarehouseData = [
    {
        id: 0,
        hover: false,
        warehouse: "warehouse-1",
        address:"Address",
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
        warehouse: "warehouse-2",
        address:"Address",
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
        warehouse: "warehouse-3",
        address:"Address",
        location:{lat:17.6868, lng:83.2185},
        basicInfo: {
            currentStatus: "running",
            lastUpdated: "3:31 PM (13/08/2023)",
            vacantCapacity: 250
        },
        materialInfo: {
            materials: ["Sulphur", "Zinc"],
            volumes: [232, 41]
        }
    },
    {
        id: 3,
        hover: false,
        warehouse: "warehouse-3",
        address:"Address",
        location:{lat:28.7041, lng:77.1025},
        basicInfo: {
            currentStatus: "running",
            lastUpdated: "3:31 PM (13/08/2023)",
            vacantCapacity: 0
        },
        materialInfo: {
            materials: ["Sulphur", "Zinc"],
            volumes: [232, 41]
        }
    }
]

const Home = () => {
    const [wareHouseDetails, setWarehouseDetails] = useState(initWarehouseData)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [animate, setAnimate] = useState(true);

    const hideCard = () => {
        // setAnimate(true);
        // setIsCollapsed(!isCollapsed)
        document.querySelector(".card_container").classList.toggle('closed')
        setIsCollapsed(!isCollapsed)
    }
    return (
        <>
            <Navbar isCollapsed={isCollapsed} hideCard={hideCard} />
            {/* <MapView wareHouseDetails={wareHouseDetails} /> */}
            <MapBox wareHouseDetails={wareHouseDetails} setWarehouseDetails={setWarehouseDetails} />
            <Card wareHouseDetails={wareHouseDetails} isCollapsed={isCollapsed} />
        </>
    )
}

export default Home