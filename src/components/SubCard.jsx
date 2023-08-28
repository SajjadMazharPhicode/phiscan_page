import React from 'react'

const SubCard = ({detail}) => {
    return (
        <div className="block cursor-pointer text-xs max-w-sm p-6 bg-white border flex-col border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-4 mt-4">
            <div className="flex">
                <img src="/assets/warehouse.png" alt="warehouse" className='h-10' />
                <div className='pl-3'>
                    <h5 className=" text-l font-medium text-gray-900 light:text-white">{detail.warehouse}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{detail.address}</span>
                    <hr class="h-px mt-2 w-35 bg-gray-200 border-0 light:bg-gray-700"></hr>
                </div>
            </div>
            <div className="flex-col">
                <span className="text-m text-gray-500 dark:text-gray-400">Basic info</span>
                <div className="mb-1 grid grid-cols-2">
                    <div>Current status:</div><div className='text-gray-800'>{detail.basicInfo.currentStatus}</div>
                    <div>Last updated:</div><div className='text-gray-800'>{detail.basicInfo.lastUpdated}</div>
                    <div>Vacant capacity:</div><div className='text-gray-800'>{detail.basicInfo.vacantCapacity}</div>
                </div>

                <span className="text-m text-gray-500 dark:text-gray-400">Material info</span>
                <div className="flex-row">
                    <div>Materials:</div>
                    <div className="flex-row">
                        {
                            detail.materialInfo.materials.map((material, i)=> <div key={i+detail.warehouse+material} className='className="text-sm text-gray-800 dark:text-gray-400"'>
                                {`${material} (${detail.materialInfo.volumes[i]})`}
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubCard
