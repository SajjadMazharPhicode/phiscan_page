import React from 'react'
import './subCard.css'


const SubCard = ({ detail }) => {
    const capacity = detail.basicInfo.vacantCapacity

    const getVolumeInPercent = () => {
        const percent = (detail.basicInfo.vacantCapacity / detail.totalCapacity * 100).toFixed(2)
        const diff = 100 - percent
        const classs = diff <= 1 ? 'empty' : diff > 1 && diff <= 25 ? 'low' : diff > 25 && diff <= 50 ? 'half' : diff > 50 && diff <= 75 ? "gt_50" : diff > 75 && diff <= 99 ? "gt_75" : 'full'
        return [classs, percent]
    }

    return (
        <div className="block cursor-pointer text-xs max-w-sm p-6 bg-white border flex-col border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4 shadow-md sbucard_container">
            <div className="flex items-center gap-2 justify-between">
                <div style={{ borderRadius: "50px", backgroundColor: "#DFF0FE" }} className='h-12 w-12 flex items-center justify-center mb-2'>
                    <img src="/assets/warehouse2.png" alt="warehouse" className='h-7 w-7' />
                </div>
                <div className='pl-3'>
                    <h5 className=" text-l font-medium text-gray-900 light:text-white">{detail.warehouse}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{detail.address}</span>
                    <hr class="h-px mt-2 w-35 bg-gray-200 border-0 light:bg-gray-700"></hr>
                </div>
                <div className='capacity_contaier'>
                    <div className={`capacity_${getVolumeInPercent()[0]}`}></div>
                </div>
            </div>
            <div className="flex-col">
                <span className="text-m text-gray-500 dark:text-gray-400">Basic info</span>
                <div className="mb-1 grid grid-cols-2">
                    <div>Current status:</div><div className='text-gray-800'>{detail.basicInfo.currentStatus}</div>
                    <div>Last updated:</div><div className='text-gray-800'>{detail.basicInfo.lastUpdated}</div>
                    <div>Vacant capacity:</div><div className='text-gray-800'>{detail.basicInfo.vacantCapacity}{`(${getVolumeInPercent()[1]}%)`}</div>
                </div>

                <span className="text-m text-gray-500 dark:text-gray-400">Material info</span>
                <div className="flex gap-14 ">
                    <div>
                        <div>Materials:</div>
                        <div className="flex-row">
                            {
                                detail.materialInfo.materials.map((material, i) => <div key={i + detail.warehouse + material} className='className="text-sm text-gray-800 dark:text-gray-400"'>
                                    {`${material} (${detail.materialInfo.volumes[i]})`}
                                </div>)
                            }
                        </div>
                    </div>

                    {/* <div className='capacity_contaier'> */}
                    {/* <img 
                        style={{ height: '50px', transform:"rotate(90deg)", border: '1px solid black' }} 
                        src={`assets/${capacity === 0 ? 'empty.png' : capacity > 0 && capacity <= 200 ? 'low.png' : capacity > 200 && capacity < 500 ? 'half.png' : 'full.png' }`} /> */}
                    {/* <div className={`capacity_${capacity === 0 ? 'empty' : capacity > 0 && capacity <= 200 ? 'low' : capacity > 200 && capacity < 500 ? 'half' : 'full' }`}></div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default SubCard
