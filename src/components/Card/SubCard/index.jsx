import React, { useContext, useState } from 'react'
import './subCard.css'
import {useNavigate} from 'react-router-dom'
import dataContext from '../../../context/DataContext'


const SubCard = ({ detail }) => {
    const {gotToPage} = useContext(dataContext)

    const getVolumeInPercent = () => {
        const fraction = detail.basicInfo.vacantCapacity / detail.totalCapacity 
        const percent = ((detail.basicInfo.vacantCapacity * 100) % detail.totalCapacity  === 0)? (fraction*100).toFixed() : (fraction * 100).toFixed(2)
        const diff = 100 - percent
        const classs = diff <= 1 ? 'empty' : diff > 1 && diff <= 25 ? 'low' : diff > 25 && diff <= 50 ? 'half' : diff > 50 && diff <= 75 ? "gt_50" : diff > 75 && diff <= 99 ? "gt_75" : 'full'
        return [classs, percent]
    }

    const getOverallElementPercent = (elmVol)=>{
        return (elmVol/detail.totalCapacity *100).toFixed(2)
        
    }


    return (
        <div 
            className="block cursor-pointer text-xs max-w-sm pl-6 pr-6 pt-2 pb-2.5 bg-white border flex-col border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-2 
             shadow-md sbucard_container"
            onClick={()=>gotToPage(detail)}
        >
            <div className="flex items-center gap-2 justify-between">
                <div style={{ borderRadius: "50px", backgroundColor: "rgb(23 88 159 / 60%)" }} className='h-12 w-12 flex items-center justify-center mb-2'>
                    <img src="/assets/waremark.png" alt="warehouse" className='h-11 w-11' />
                </div>
                <div className='pl-3'>
                    <h5 className=" text-l font-medium text-gray-900 light:text-white">{detail.warehouse}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{detail.address}</span>
                    <hr className="h-px mt-2 w-35 bg-gray-200 border-0 light:bg-gray-700"></hr>
                </div>
                <div className='capacity_contaier' style={{transform:"rotate(-90deg)"}}>
                    <div className={`capacity_${getVolumeInPercent()[0]}`}></div>
                </div>
            </div>
            <div className="flex-col">
                <span className="text-m text-gray-500 dark:text-gray-400">Basic info</span>
                <div className="mb-1 grid grid-cols-2">
                    <div>Current status:</div><div className='text-gray-800'>{detail.basicInfo.currentStatus}</div>
                    <div>Last updated:</div><div className='text-gray-800'>{detail.basicInfo.lastUpdated}</div>
                    <div>Vacant capacity:</div><div className='text-gray-800'>{detail.basicInfo.vacantCapacity}{` (${getVolumeInPercent()[1]}%)`}</div>
                </div>

                <span className="text-m text-gray-500 dark:text-gray-400">Material info</span>
                <div className="grid grid-cols-3 gap-2 ">
                    <div>Materials</div>
                    <div>Volume</div>
                    <div>Overall%</div>
                    {
                        detail.materialInfo.materials.map((material, i) => (

                            <div key={i + detail.warehouse + material}>
                                <div  className='className="text-sm text-gray-800 dark:text-gray-400"'>
                                    {material}
                                </div>
                                <div className='className="text-sm text-gray-800 dark:text-gray-400"'>
                                    {detail.materialInfo.volumes[i]}
                                </div>
                                <div className='className="text-sm text-gray-800 dark:text-gray-400"'>
                                    {getOverallElementPercent(detail.materialInfo.volumes[i])}
                                </div>
                            </div>

                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SubCard
