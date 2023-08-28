import React from 'react'
import SubCard from './SubCard'
import './card.css'

const Card = ({wareHouseDetails}) => {



    return (

        <div href="#" style={{
            zIndex: 99,
            position: "absolute",
            top: "180px", left: "-20px",
            backgroundColor: "#4285f4",
            width: "20rem",
            height: "25rem"
        }} className="block max-w-sm p-6 bg-white border-gray-200 rounded-3xl shadow hover:bg-gray-100 overflow-scroll scrolling">

            <div href="#" className="block text-gray-900 rounded md:border-0 dark:text-white text-xl pl-2 cursor-default">About</div>

            {
                wareHouseDetails?.map(detail => <SubCard detail={detail} />)
            }
        </div>

    )
}

export default Card