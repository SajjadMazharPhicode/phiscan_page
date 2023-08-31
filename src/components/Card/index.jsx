import React, { useContext, useState } from 'react'
import SubCard from './SubCard'
import './card.css'
import dataContext from '../../context/DataContext'

const Card = ({pageId='home'}) => {
    const {wareHouseDetails, isCollapsed} = useContext(dataContext)
    return (
        <div
            style={{
                zIndex: 99,
                position: "absolute",
                top: "150px",
                left: "-20px",
                // width: isCollapsed ? "10px" : "19rem",
                height: "60vh",
                // opacity: '1'
            }}
            id='caard'
            className={`card_container rounded-3xl`}
        >
            {/* <div
                className='accordion_container'
                style={{
                    position: "absolute",
                    zIndex: 100,
                    height: "40px",
                    width: "40px",
                    backgroundColor: "#4285f4",
                    left: "92.5%",
                    top: "50%",
                    paddingTop: '5px',
                    opacity: '0.5',
                    borderRadius: '100px',
                    boxShadow:"1px 1px 1px 2px white"
                    // borderRadius: '0px 100px 100px 0'
                    // clipPath: 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)'

                }}
                onClick={() => hideCard()}
            >
                {!isCollapsed ? <img width='30px' style={{ marginLeft: '5px', filter: 'invert()' }} src='assets/left-arrow.png' /> : <img width='30px' style={{ marginLeft: '5px', filter: 'invert()' }} src='assets/right-arrow.png' />}
            </div> */}
            
            <div href="#" style={{
                backgroundColor: "rgb(79 113 197)",
                width: "19rem",
                height: "60vh",
                // display: isCollapsed ? 'none' : 'block'
            }} className="block max-w-sm p-6 bg-white border-gray-200 rounded-3xl shadow hover:bg-gray-100 overflow-scroll scrolling">
                <div href="#" className="block text-center text-gray-900 rounded md:border-0 dark:text-white text-xl pl-2 cursor-default">Overview</div>

                {
                    wareHouseDetails?.map((detail, i) => <SubCard key={i+pageId} detail={detail} />)
                }
            </div>
        </div>

    )
}

export default Card