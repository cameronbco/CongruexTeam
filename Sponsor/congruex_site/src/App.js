import './App.css';
import {  Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from './components';
import { Homepage, Secondpage, NotFound, Contact, Support, SignIn } from './pages';

function App() {
  // alert(document.getElementById('count_id_1').getAttribute('counter_id'));
  return (
    <>
      <Navbar />
      <div className='gradient_bg'>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Homepage />}/>
          <Route path='/second' element={<Secondpage />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/support' element={<Support />}/>
          <Route path='/sign_in' element={<SignIn />}/>
        </Routes>

      </div>
    </>
  );
}

export default App;
