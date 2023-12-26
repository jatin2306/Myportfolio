import './App.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/footer/Footer';
import Maincomponent from './Components/home/Maincomponent';
import Newnav from './Components/newnavbaar/Newnav';
import Signup from './Components/signup_sigin/Signup';
import Signin from './Components/signup_sigin/Signin';    
import { Routes, Route } from 'react-router-dom'
import Cart from './Components/cart/Cart';
import Buynow from './Components/buynow/Buynow';
function App() {

  return (
    <>
      <Navbar />
      <Newnav />
      <Routes>
        <Route path='/' element={<Maincomponent />} />
        <Route path='/login' element={<Signin/>} />
        <Route path='/register' element={<Signup />} />
        <Route path='/getproductsone' element={<Cart />}/>
        <Route path='/buynow' element={<Buynow />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
