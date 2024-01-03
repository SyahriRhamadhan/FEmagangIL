import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import React, { Suspense, useState, useEffect } from 'react'
import axios from "axios";
import Landing from './Pages/Landing Page/LandingPage'
import Homepage from './Pages/Home Page/HomePage'
import Login from './Pages/Auth/LoginPage'
import Register from './Pages/Auth/RegisterPage'
import ProfilePage from './Pages/Profile/ProfilePage'
import UpdateProfilePage from './Pages/Profile/UpdateProfile'
import Stupenn from './Pages/Program/Stupen'
import Magangg from './Pages/Program/Magang'
import Program from './Pages/Program/Program'

import Dashboard from './Pages/Admin/Dashboard';
import AddCourse from './Pages/Admin/AddCourse';
import EditCourse from './Pages/Admin/EditCourse';
import NavigateToHome from './Auth/NavigateToHome'
import ProtectedToken from './Auth/ProtectedToken'
function App() {

  const [users, setUsers] = useState("");
  
  const whoami = () => {
    axios
        .get('http://localhost:8080/v1/api/current-user', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        .then((response) => {
            setUsers(response.data.data);
        });
  };

  useEffect(() => {
      whoami();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Suspense >
          <Routes>
            <Route path='/' element={
              <NavigateToHome>
                <Homepage users={users}/>
              </NavigateToHome>
            }/>

            <Route path='/landing' element={
             <ProtectedToken>
               <Landing />
             </ProtectedToken>
            }/>

            <Route path='/login' element={
              <NavigateToHome>
                <Login users={users}/>
              </NavigateToHome>
            }/>

            <Route path='/register' element={
              <NavigateToHome>
                <Register users={users}/>
              </NavigateToHome>
            }/>

            <Route path='/profile' element={
            <ProtectedToken>
              <ProfilePage users={users}/>
            </ProtectedToken>
            }/>

            <Route path='/profile/update_profile' element={
            <ProtectedToken>
              <UpdateProfilePage users={users}/>
            </ProtectedToken>
            }/>

            <Route path='/program/studi-independent' element={
            <ProtectedToken>
              <Stupenn users={users}/>
            </ProtectedToken>
            }/>

            <Route path='/program/magang' element={
            <ProtectedToken>
              <Magangg users={users}/>
            </ProtectedToken>
            }/>

            <Route path='/program/:id' element={
            <ProtectedToken>
              <Program users={users}/>
            </ProtectedToken>
            }/>

            <Route path='/dashboard' element={
            <ProtectedToken>
              <Dashboard users={users}/>
            </ProtectedToken>
            }/>

            <Route path='/dashboard/course/add-course' element={
            <ProtectedToken>
              <AddCourse users={users}/>
            </ProtectedToken>
            }/>
            <Route path='/dashboard/course/edit-course/:id' element={
            <ProtectedToken>
              <EditCourse users={users}/>
            </ProtectedToken>
            }/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
