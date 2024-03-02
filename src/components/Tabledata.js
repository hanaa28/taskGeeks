import React, { useState } from "react";
import { dataList } from "../data/tabledata";
import image1 from '../assets/images/Group.png'
import image2 from '../assets/images/Vector.png'
import image3 from '../assets/images/Vector1.png'
import image4 from '../assets/images/Group62.png'

import icon1 from '../assets/images/Group 96.png'; 
import "../CSS/table.css";

const Tabledata = () => {
    const [datas, setdata] = useState(dataList);

    return (
        
        <div className="table">
            
            {datas.map((data, id) => (
                
                <div className="table-row" key={id}>
                    <div className="box">
                    
                    <img src={image1} alt="Icon 1" className='img'/>
                        <span>{data.tex1}</span>
                    </div>
                    <div className="box">
                    <img src={image2} alt="Icon 1" className='img'/>
                        <span>{data.tex2}</span>
                    </div>
                    <div className="box">
                    <img src={image3} alt="Icon 1" className='img'/>
                        <span style={{ color: data.text4 === "Low Risk" ? "#D94111" : "#118F4B" }}>{data.text3}</span>
                    </div>
                    <div className="box">
                    <img src={image4} alt="Icon 1" className='img'/>
                        <span>{data.text4}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tabledata;
