// import LoginPage from './pages/loginpages/loginpages';

import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Loginpage from './pages/loginpages/Loginpage';
import Forgotpage from './pages/forgotpage/Forgotpage';
import Registerpages from './pages/registerpages/Registerpages';

import HooksGral from "./playground/HooksGral";
import UseStateHook from "./playground/useState";


function App() {
  return (
  <BrowserRouter>
   <Routes>
   <Route path="/" element={<Loginpage/>} />
   <Route path="/forgot" element={<Forgotpage/>} />
    <Route path="/register" element={<Registerpages/>} />

    
        <Route path="/hooks" element={<HooksGral />} />
        <Route path="/usestate" element={<UseStateHook />} />
    
   </Routes>
   
  </BrowserRouter>
  );
}

export default App;
