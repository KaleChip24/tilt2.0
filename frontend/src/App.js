import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./screens/Home/Home.jsx";
import { verifyUser } from "./services/users";
import VenueDetail from "./screens/VenueDetail/VenueDetail"
import VenueCreate from './screens/VenueCreate/VenueCreate';
import VenueEdit from './screens/VenueEdit/VenueEdit';

function App() {
  // const [user, setUser] = useStatue(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await verifyUser();
  //     user ? setUser(user) : setUser(null);
  //   };
  //   fetchUser();
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/venues/add-venue' element={<VenueCreate />} />
        <Route path='/venues/:id' element={<VenueDetail />} />
        <Route path='/venues/:id/edit' element={<VenueEdit />} />
        <Route path='/add-machine' element={null} />
        <Route path='/machine/:id/edit' element={null} />
        <Route path='/signUp' element={null} />
        <Route path='/signIn' element={null} />
        <Route path='/signOut' element={null} />
      </Routes>

    </div>
  );
}

export default App;
