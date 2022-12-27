import React, {useEffect, useContext} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { axiosRequest, axiosResponse } from './axios';
import Home from './pages/home/home';
import Header from './components/header/header';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './components/dashboardscreens/signup';
import LoaderContext from './context/loadercontext';
import { Login } from '@mui/icons-material';

function App() {
  const {Loading, setLoading} = useContext(LoaderContext) 
  useEffect(() => {
    axiosRequest(setLoading)
    axiosResponse(setLoading)
  },[])

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />}/> */}
          <Route path="/signup" element={<Signup />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
