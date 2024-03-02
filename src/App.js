import logo from './logo.svg';
import './App.css';
import Leftside from './components/Leftside';
import Header from './components/Header';
import Tabledata from './components/Tabledata';
import Filter from './components/Filter';
function App() {
  return (
    <div className='all-content'>
      <Leftside />
<div className='row'>
      <div className='col-md-8 col-sm-12 all'>
        
          <div className='header ms-5'>
            <Header />
          </div>
          <div className='table-container ms-5'>
            <Tabledata />
          </div>
       
      </div>
      <div className='col-md-3 col-sm-12'>
      <Filter />
      </div>
    </div>
    </div>
   
  );

}

export default App;
