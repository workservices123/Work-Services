import { Home } from "./Components/Pages/Home";
import {Register} from "./Components/Pages/Register"
// import {Login} from '../src/Components/Pages/Login/Login'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/historial" element={<Home/>}></Route>
        <Route path="/notificaciones" element={<Home/>}></Route>
        <Route path="/favoritos" element={<Home/>}></Route>
        <Route path="/registro" element={<Register/>}></Route>
      </Routes>
      {/* //<Login /> */}
    </div>
  );
}

export default App;
