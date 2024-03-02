
import icon1 from '../assets/images/Group 96.png'; 
import icon2 from '../assets/images/Group 95.png';
import icon3 from '../assets/images/Group 97.png';
import icon4 from '../assets/images/Group 98.png';
import icon5 from '../assets/images/Group 99.png';
import user from '../assets/images/—ÎÓÈ 1.png';

import '../CSS/Leftside.css';
import logo from '../assets/images/street suite logo-04 1.png'; 
const Leftside = () => {

    return (
        <div className="">
             
        <div className="icon-user  ">
            <div>
        <div className="logo " >
                <img src={logo} alt="Icon 1" />
            </div>
            <div className="icons ">
                <img src={icon1} alt="Icon 1" className='imgs'/>
                <img src={icon2} alt="Icon 2" className='imgs'/>
                <img src={icon3} alt="Icon 3" className='imgs'/>
                <img src={icon4} alt="Icon 4" className='imgs'/>
                <img src={icon5} alt="Icon 4" className='imgs'/>
            </div>
            </div>
            <div className="user">
             <img src={user} alt="Icon 4" />
            </div>
        </div>
        </div>
    )
}
export default Leftside;