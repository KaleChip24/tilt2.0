import './App.css';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./screens/Home/Home.jsx";
import { verifyUser } from "./services/users";
import VenueDetail from "./screens/VenueDetail/VenueDetail"
import VenueCreate from './screens/VenueCreate/VenueCreate';
import VenueEdit from './screens/VenueEdit/VenueEdit';
import SignIn from './screens/SignIn/SignIn';
import MachineCreate from './screens/MachineCreate/MachineCreate';
import MachineEdit from './screens/MachineEdit/MachineEdit';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [toggle, settoggle] = useState(false);

  const nav = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      const res = await verifyUser();
      res ? setSignedIn(true) : setSignedIn(false);
    };
    fetchUser();
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/venues/add-venue' element={<VenueCreate />} />
        <Route path='/venues/:id' element={<VenueDetail />} />
        <Route path='/venues/:id/edit' element={<VenueEdit />} />
        <Route path='/machines/add-machine' element={<MachineCreate />} />
        <Route path='/machines/:id/edit' element={<MachineEdit />} />
        {/* <Route path='/signUp' element={null} /> */}
        <Route path='/signIn' element={<SignIn setSignedIn={setSignedIn} />} />
        <Route path='/signOut' element={null} />
      </Routes>

    </div>
  );
}

export default App;
