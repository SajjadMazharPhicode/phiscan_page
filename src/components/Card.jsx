import React from 'react'
import SubCard from './SubCard'
import './card.css'

const Card = ({wareHouseDetails}) => {



    return (
        <div 
            style={{
                zIndex: 99,
                position: "relative",
                top: "150px", left: "-20px",
                backgroundColor: "#4285f4",
                width: "20rem",
                height: "25rem",    
                border:'2px solid red'
            }}
        >
            <div style={{position:"absolute", zIndex:100, height:"30px", width:"30px", backgroundColor:"green", left:"95%", top:"50%"}}></div>
            <div href="#" style={{
                // top: "150px", left: "-20px",
                backgroundColor: "#4285f4",
                width: "20rem",
                height: "25rem"
            }} className="block max-w-sm p-6 bg-white border-gray-200 rounded-3xl shadow hover:bg-gray-100 overflow-scroll scrolling">

                <div href="#" className="block text-gray-900 rounded md:border-0 dark:text-white text-xl pl-2 cursor-default">About</div>

                {
                    wareHouseDetails?.map(detail => <SubCard detail={detail} />)
                }
            </div>
        </div>

    )
}

export default Card