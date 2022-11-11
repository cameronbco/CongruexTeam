import './App.css';
import {  Navigate, Route, Routes } from "react-router-dom";
import { Banner, Navbar, Navbar_better } from './components';
import { Homepage, Secondpage, NotFound, Contact, Support, SignIn, Createpage, Editor } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className='App'>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/second' element={<Secondpage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/support' element={<Support />} />
          <Route path='/sign_in' element={<SignIn />} />
          <Route path='/create_page' element={<Createpage />} />
          <Route path='/editor_page' element={<Editor />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
