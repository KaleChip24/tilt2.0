import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./screens/Home/Home.jsx";
import { verifyUser } from "./services/users";
import VenueDetail from "./screens/VenueDetail/VenueDetail"

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
        <Route path='/add-venue' element={null} />
        <Route path='/edit-venue' element={null} />
        <Route path='/add-machine' element={null} />
        <Route path='/edit-machine' element={null} />
        <Route path='/signUp' element={null} />
        <Route path='/signIn' element={null} />
        <Route path='/signOut' element={null} />
        <Route path='/venues/:id' element={<VenueDetail />} />
      </Routes>

    </div>
  );
}

export default App;
