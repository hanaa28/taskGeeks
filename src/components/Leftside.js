
import icon1 from '../assets/images/Group 96.png'; // Import your icon images
import icon2 from '../assets/images/Group 95.png';
import icon3 from '../assets/images/Group 97.png';
import icon4 from '../assets/images/Group 98.png';
import icon5 from '../assets/images/Group 99.png';
import user from '../assets/images/—ÎÓÈ 1.png';

import '../CSS/Leftside.css';
const Leftside = () => {

    return (
        <div className="icon-user">
            <div className="icons">
                <img src={icon1} alt="Icon 1" />
                <img src={icon2} alt="Icon 2" />
                <img src={icon3} alt="Icon 3" />
                <img src={icon4} alt="Icon 4" />
                <img src={icon5} alt="Icon 4" />
            </div>
            <div className="user">
             <img src={user} alt="Icon 4" />
            </div>
        </div>
    )
}
export default Leftside;