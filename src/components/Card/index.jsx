import React, { useContext} from 'react'
import SubCard from './SubCard'
import './card.css'
import dataContext from '../../context/DataContext'

const Card = ({pageId='home'}) => {
    const {wareHouseDetails} = useContext(dataContext)
    return (
        <div
            style={{
                zIndex: 99,
                position: "absolute",
                top: "90px",
                left: "-20px",
                // width: isCollapsed ? "10px" : "19rem",
                height: "82vh",
                // opacity: '1'
                boxShadow:"1px 1px 7px 1px grey"
            }}
            id='caard'
            className={`card_container rounded-3xl`}
        >
            
            <div href="#" style={{
                // backgroundColor: "rgb(79 113 197)",
                backgroundColor: "#667FC1",
                width: "23vw",
                height: "82vh",
                
                // display: isCollapsed ? 'none' : 'block'
            }} className="block max-w-sm pl-6 pr-6 pt-2 bg-white border-gray-200 rounded-3xl shadow hover:bg-gray-100 overflow-scroll scrolling">
                <div href="#" className="block text-center text-gray-900 rounded md:border-0 dark:text-white text-xl pl-2 cursor-default">Overview</div>

                {
                    wareHouseDetails?.map((detail, i) => 
                    <div key={i+pageId}><SubCard key1={i+pageId} detail={detail} /></div>)
                }
            </div>
        </div>

    )
}

export default Card