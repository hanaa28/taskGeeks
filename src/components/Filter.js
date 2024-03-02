import React, { useState } from 'react';
import '../CSS/Filter.css';
import search from '../assets/images/Search.png';
import Elastc from '../assets/images/industory/Group 58.png';
import shop from '../assets/images/industory/Vector (3).png';
import consummer from '../assets/images/industory/Group.png';
import matrial from '../assets/images/industory/Vector.png';
import energ from '../assets/images/industory/Vector (2).png';
import healthy from '../assets/images/industory/Vector (1).png';
import icon1 from '../assets/images/industory/Gro.png';
import icon2 from '../assets/images/industory/Vec.png';
import icon3 from '../assets/images/industory/Page.png';
import icon4 from '../assets/images/industory/Group 57.png';
import icon5 from '../assets/images/industory/Group (1).png';
import wrong from '../assets/images/wrong.png';
const Filter = () => {
    const [names, setNames] = useState(["healthy care", "Materials","Energy",
    "consumer Discrtionary","consumer Staples","Real Elastc","IT","Communication","industrials",
"Utilities","Financials"]);
    const [industoryname,setIndstoryname] = useState([])
    const entername = (name) => {
        if (industoryname.includes(name)) {
            const filteredNames = industoryname.filter(item => item !== name);
            setIndstoryname(filteredNames);
        } else {
            setIndstoryname([...industoryname, name]);
        }
    }
    return (
        <div className='all-filter'>
            <div className="title">
                <h2 style={{color:"white"}}>Filter</h2>
            </div>
            <div className="i">
            <div className="filter">
                {industoryname.map((industry) => (
                    <span>{industry}<button onClick={() => entername(industry)}><img src={wrong} alt="wrong"/></button></span>
                ))}
            </div>
        </div>
            <div className="content  mx-4  ">
            <div className="stock-section">
                <div className="stock-title">
                  <h5 style={{color:"white"}}>Stock</h5>  
                </div>
                <div className="search-container ">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search"
                    />
                    <button className="search-icon" >
                        <img src={search} alt="Search" />
                    </button>
                </div>
            </div>
            <div className="Industry">
                <h5 style={{color:"white"}}>Industry</h5>
                <div className="Industry-section">
                    <div className="section">
                        <div className="ss">
                            <div className="Industry-box">
                                <img src={healthy} alt="img" />
                                <span onClick={() => entername(names[0])}>{names[0]}</span>
                            </div>
                            <div className="Industry-box">
                                <img src={matrial} alt="img" />
                                <span onClick={() => entername(names[1])}>{names[1]}</span>
                            </div>
                            <div className="Industry-box">
                                <img src={energ} alt="img" />
                                <span onClick={() => entername(names[2])}>{names[2]}</span>
                            </div>
                            <div className="Industry-box">
                                <img src={consummer} alt="img" />
                                <span onClick={() => entername(names[3])}>{names[3]}</span>
                            </div>
                            <div className="Industry-box">
                                <img src={shop} alt="img" />
                                <span onClick={() => entername(names[4])}>{names[4]}</span>
                            </div>
                            <div className="Industry-box">
                                <img src={Elastc} alt="img" />
                                <span onClick={() => entername(names[5])}>{names[5]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className='ss'>
                            <div className="Industry-box">
                                <img src={icon2} alt="img" />
                                <span onClick={() => entername(names[6])}>{names[6]}</span>
                            </div>
                            <div className="Industry-box">
                                <img src={icon3} alt="img" />
                                <span onClick={() => entername(names[7])}>{names[7]}</span>
                            </div>
                            <div className="Industry-box">
                                <img src={icon1} alt="img" />
                                <span onClick={() => entername(names[8])}>{names[8]}</span>
                            </div>
                            <div className="Industry-box">
                                <img src={icon5} alt="img" />
                                <span onClick={() => entername(names[9])}>{names[9]}</span>
                            </div>
                            <div className="Industry-box">
                                <img src={icon4} alt="img" />
                                <span onClick={() => entername(names[10])}>{names[10]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* selction */}
            <div className="Industry-section">
                <div className="section">
                    <h5  style={{color:"white"}}>Market Cap</h5>
                    <div className="checkbox-container">
                        <input className="input" type="checkbox" id="checkbox1" />
                        <label className="label" htmlFor="checkbox1" style={{color:"white"}}>
                            Micro
                        </label>
                    </div>
                    <div className="checkbox-container">
                        <input className="input" type="checkbox" id="checkbox2"  />
                        <label className="label" htmlFor="checkbox2" style={{color:"white"}}>
                            Small
                        </label>
                    </div>
                    <div className="checkbox-container">
                        <input className="input" type="checkbox" id="checkbox3"  />
                        <label className="label" htmlFor="checkbox3" style={{color:"white"}}>
                            Large
                        </label>
                    </div>

                </div>
                <div className="section">
                    <h5 style={{color:"white"}}>Risk Level</h5>
                    <div className="checkbox-container">
                        <input className="input" type="checkbox" id="checkbox4" />
                        <label className="label" htmlFor="checkbox4" style={{color:"white"}}>
                            Low Risk
                        </label>
                    </div>
                    <div className="checkbox-container">
                        <input className="input" type="checkbox" id="checkbox5" />
                        <label className="label" htmlFor="checkbox5"style={{color:"white"}}>
                            Mid Risk
                        </label>
                    </div>
                    <div className="checkbox-container">
                        <input className="input" type="checkbox" id="checkbox6"  />
                        <label className="label" htmlFor="checkbox6" style={{color:"white"}}>
                            High Risk
                        </label>
                    </div>

                </div>
            </div>

            {/* scroll */}
            <div className="scroll ">
            <div className="scrolls">
                <h5 style={{color:"white"}}>Strategy</h5>
                <div className="scrolling">
                    <div className="scroll-section">
                        <div style={{ height: "20px" }}></div>
                        <div style={{color:"white"}}>Big Otional Buys</div>
                        <div style={{color:"white"}}>Merger Arbitrage</div>
                        <div style={{color:"white"}}>short report</div>
                        <div style={{color:"white"}}>big report</div>
                    </div>
                </div>
                </div>
                <div className="scrolls">
                <h5 style={{color:"white"}}>Asset</h5>
                <div className="scrolling">
                    <div className="scroll-section">
                        <div style={{ height: "20px" }}></div>
                        <div style={{color:"white"}}>Stocks</div>
                        <div style={{color:"white"}}>OPtion</div>
                        <div style={{color:"white"}}>Futures</div>
                        <div style={{color:"white"}}>Stocks</div>
                        <div style={{color:"white"}}>Option</div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='text-center'>
                <button className='but'>Apply</button>
            </div>
        </div>
    );
};

export default Filter;
