import { Home } from "./Components/Pages/Home/Home"
import { Register } from "./Components/Pages/Register/Register";
import { Profile } from "./Components/Pages/Profile/Profile";
import { Login } from "./Components/Pages/Login/Login"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/historialTrabajos" element={<Register></Register>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
      <Route path="/favoritos" element={<Login></Login>}></Route>
    </Routes>
    </>
  );
}

export default App;
