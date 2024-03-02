import logo from './logo.svg';
import './App.css';
import Leftside from './components/Leftside';
import Header from './components/Header';
import Tabledata from './components/Tabledata';
import Filter from './components/Filter';
function App() {
  return (
    <div className='all-content'>
    
      <div className='leftside'>
      <Leftside />
     </div>
     <div className='rightside'>
  
    <div className='col-md-8 col-sm-12'>
      <div className='all'>
        <div className='header ms-5'>
          <Header />
        </div>
        <div className='table-container ms-5'>
          <Tabledata />
        </div>
      </div>
    </div>
    <div className='col-md-4 d-none d-sm-block'>
      <Filter />

  </div>
</div>
      </div>

  
   
  );

}

export default App;
