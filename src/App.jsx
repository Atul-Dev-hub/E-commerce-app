import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <div className=" bg-slate-900 fixed w-full top-0 z-[100] ">
        <Navbar />
      </div>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Toaster />
     </div>
      
    
  )

};

export default App;
