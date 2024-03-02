import search from '../assets/images/Search.png'; 
import notifation from '../assets/images/Group 103.png'; 
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';



import '../CSS/Header.css';
const Header = () => {

    return (
        <div className="header row">
        <div className="title-search col-12 col-md-3 text-center">
          <h1>ALERTS</h1>
        </div>
        
        <div className="search-container col-md-8 col-sm-10">
          <input
            type="text"
            placeholder="Search"
            className="searcha"
          />
          <button className="search-icona">
            <img src={search} alt="Search" />
          </button>
          <div>
          <div className="notifation col-1">
          <img src={notifation} alt="Icon 1" />
        </div>
          </div>
          </div>
        
      
      </div>
      
    )
}
export default Header;