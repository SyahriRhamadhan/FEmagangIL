import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import React, { Suspense, useState, useEffect } from 'react'
import axios from "axios";
import Landing from './Pages/Landing Page/LandingPage'
import Homepage from './Pages/Home Page/HomePage'
import Login from './Pages/Auth/LoginPage'
import Register from './Pages/Auth/RegisterPage'
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
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
