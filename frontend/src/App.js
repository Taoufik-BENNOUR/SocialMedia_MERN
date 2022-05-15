import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Messenger from './components/messenger/Messenger';
import Profile from './components/profile/Profile';
import Register from './components/register/Register';
import Topbar from './components/topbar/Topbar';
import { AuthContext } from './context/AuthContext';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
    <Routes>
      <Route path='/' element={user? <Home/> :<Register/>}/>
      <Route path='/login' element={user? <Navigate to="/"/>  : <Login/>}/>
      <Route path='/register' element={user? <Navigate to="/"/>  :<Register/>}/>
      <Route path='/profile/:username' element={<Profile/>}/>
      <Route path='/messenger' element={<Messenger />}/>
      {/* <Route path='*' element={<Navigate to={"/"}/>}/> */}

    </Routes>
    </>
  );
}

export default App;
