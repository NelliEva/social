import {Route, Routes} from 'react-router-dom';

import Meetups from './component/Mainmenu/Meetups';
import Nav from './component/Nav/Nav';
import Favorite from './component/Nav/Favorite';
import Signin from './component/Signin/Signin';
import Register from './component/Signin/Register';
import AddMeetup from './component/Nav/Add';
import X from './X'



function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Routes>
       
       <Route path='/social' element= {<Meetups/>}/> 
       <Route path='/favorite' element={<Favorite/>}/>
       <Route path='/signin' element={<Signin/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/add' element={<AddMeetup/>}/> 
       <Route path='/x' element ={<X/>}/>

          

      </Routes>
    </div>
  );
}

export default App;