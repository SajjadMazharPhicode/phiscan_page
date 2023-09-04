import React, { useState } from 'react'
import dataContext from './DataContext'
import { useNavigate } from 'react-router-dom';

const wrImgs = ['20220203_120444.jpg', '20220203_125525.jpg', '20220203_113456.jpg', '20220203_120432.jpg', '20220203_112331.jpg', '20220203_125456.jpg', '20220203_114644.jpg', '20220203_112315.jpg', 'image3.jpg', '20220203_112537.jpg', '20220203_114520.jpg', '20220203_123240.jpg', 'image2.jpg', '20220203_114330.jpg', '20220203_114334.jpg', '20220203_124220.jpg', '20220203_112327.jpg', '20220203_113459.jpg', '20220203_123114.jpg', '20220203_114340.jpg', '20220203_123116.jpg', '20220203_112334.jpg', '20220203_113511.jpg', '20220203_113453.jpg', '20220203_114351.jpg', '20220203_113448.jpg', 'image1.jpg', '20220203_124154.jpg', '20220203_125100.jpg', '20220203_114339.jpg', '20220203_114353.jpg', '20220203_113210.jpg', '20220203_120439.jpg', '20220203_120434.jpg', '20220203_112526.jpg', '20220203_113508.jpg', '20220203_125521.jpg', '20220203_113547.jpg', '20220203_112431.jpg', '20220203_113550.jpg', '20220203_113223.jpg', '20220203_120450.jpg', '20220203_112320.jpg', '20220203_125527.jpg', '20220203_112438.jpg', '20220203_112400.jpg', '20220203_113349.jpg', '20220203_114425.jpg', '20220203_114627.jpg', '20220203_120441.jpg', '20220203_113513.jpg', '20220203_112404.jpg', '20220203_125058.jpg', '20220203_120446.jpg', '20220203_112329.jpg', '20220203_125518.jpg', '20220203_114427.jpg', '20220203_123112.jpg', '20220203_112325.jpg', '20220203_113246.jpg', '20220203_125145.jpg', '20220203_125118.jpg', '20220203_125523.jpg', '20220203_113347.jpg', '20220203_114336.jpg', '20220203_112459.jpg', '20220203_112312.jpg', '20220203_113540.jpg', '20220203_123908.jpg', '20220203_125133.jpg', '20220203_123953.jpg', '20220203_112322.jpg', '20220203_114522.jpg', '20220203_114621.jpg', '20220203_112318.jpg', '20220203_120436.jpg']


const initWarehouseData = [
    {
        id: 0,
        hover: false,
        totalCapacity: 1000,
        warehouse: "warehouse-1",
        address: "Kolkata",
        images: wrImgs.slice(0,10),
        location: { lat: 22.5726, lng: 88.3639 },
        basicInfo: {
            currentStatus: "active",
            lastUpdated: "2:30 PM (25/08/2023)",
            vacantCapacity: 500
        },
        materialInfo: {
            materials: ["Sulphur", "Zinc", "Coal"],
            volumes: [23, 43, 54]
        },
        previousData: {
            material: [
                {
                    name: "Zinc",
                    monthlyVol: []
                },
                {
                    name: "Coal",
                    monthlyVol: []
                },
                {
                    name: "Sulphur",
                    monthlyVol: []
                },
            ]
        }
    },
    {
        id: 1,
        hover: false,
        totalCapacity: 1000,
        warehouse: "warehouse-2",
        address: "Bengaluru",
        location: { lat: 12.9716, lng: 77.5946 },
        images:wrImgs.slice(10,21),
        basicInfo: {
            currentStatus: "running",
            lastUpdated: "3:30 PM (23/08/2023)",
            vacantCapacity: 100
        },
        materialInfo: {
            materials: ["Sulphur", "Zinc", "Coal"],
            volumes: [232, 41, 24]
        },
        previousData: {
            material: [
                {
                    name: "Zinc",
                    monthlyVol: []
                },
                {
                    name: "Coal",
                    monthlyVol: []
                },
                {
                    name: "Sulphur",
                    monthlyVol: []
                },
            ]
        }
    },
    {
        id: 2,
        hover: false,
        totalCapacity: 1000,
        warehouse: "warehouse-3",
        address: "Visakhapatnam",
        images:wrImgs.slice(20,31),
        location: { lat: 17.6868, lng: 83.2185 },
        basicInfo: {
            currentStatus: "running",
            lastUpdated: "3:31 PM (13/08/2023)",
            vacantCapacity: 800
        },
        materialInfo: {
            materials: ["Sulphur", "Zinc"],
            volumes: [232, 41]
        },
        previousData: {
            material: [
                {
                    name: "Zinc",
                    monthlyVol: []
                },
                {
                    name: "Coal",
                    monthlyVol: []
                },
                {
                    name: "Sulphur",
                    monthlyVol: []
                },
            ]
        }
    },
    {
        id: 3,
        hover: false,
        totalCapacity: 1000,
        warehouse: "warehouse-4",
        address: "Delhi",
        images:wrImgs.slice(30,41),
        location: { lat: 28.7041, lng: 77.1025 },
        basicInfo: {
            currentStatus: "running",
            lastUpdated: "3:31 PM (13/08/2023)",
            vacantCapacity: 0
        },
        materialInfo: {
            materials: ["Sulphur", "Zinc"],
            volumes: [232, 410]
        },
        previousData: {
            material: [
                {
                    name: "Zinc",
                    monthlyVol: []
                },
                {
                    name: "Coal",
                    monthlyVol: []
                },
                {
                    name: "Sulphur",
                    monthlyVol: []
                },
            ]
        }
    }
]


const DataState = ({ children }) => {
    const [wareHouseDetails, setWarehouseDetails] = useState(initWarehouseData);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate()



    const hideCard = () => {
        document.querySelector(".card_container").classList.toggle('closed')
        setIsCollapsed(!isCollapsed)
    }

    const gotToPage = (detail)=>{
        // navigate({
        //     pathname:"/warehouse-details",
        //     search:"?id="+detail.id
        // })
        navigate("/dashboard", {state:{id:detail.id}})
    }

    const values = {
        wareHouseDetails,
        isCollapsed,
        setIsCollapsed,
        setWarehouseDetails,
        hideCard,
        gotToPage,
    }

    return (
        <dataContext.Provider value={values}>
            {children}
        </dataContext.Provider>
    )
}

export default DataState
