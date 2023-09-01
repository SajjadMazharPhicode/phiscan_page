import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import MapBox from '../../components/MapBox'
import dataContext from '../../context/DataContext'


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
    },[setWarehouseDetails])
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