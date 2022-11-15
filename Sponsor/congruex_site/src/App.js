import './App.css';
import {  Navigate, Route, Routes } from "react-router-dom";
import { Banner, Navbar, Navbar_better } from './components';
import { UseComponentVisible } from './hooks';
import { Homepage, Secondpage, NotFound, Contact, Support, SignIn, Createpage, Editor, Chandler_Page, Shane_Page, Ryan_Page } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <UseComponentVisible id='banner-view' children={<Banner />} />
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
          <Route path='/chandler_page' element={<Chandler_Page />} />
          <Route path='/shane_page' element={<Shane_Page />} />
          <Route path='/ryan_page' element={<Ryan_Page />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
