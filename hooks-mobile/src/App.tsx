
import './App.css'
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import { ProtectedRoutes } from './pages/ProtectedRoutes';
function App() {

  axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

  return (
     <BrowserRouter>
     <Routes >
       <Route element={<Login/>} path='/login'/>
          <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
     </Routes>
     </BrowserRouter>
   
  )
}

export default App
