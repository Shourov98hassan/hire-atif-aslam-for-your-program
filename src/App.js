import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ProceedCheckout from './components/ProceedCheckout/ProceedCheckout';
import About from './components/About/About';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/services' element={<Services></Services>}/>
        <Route path='/proceedcheckout' element={
          <RequireAuth>
            <ProceedCheckout></ProceedCheckout>
          </RequireAuth>
        }/>
        <Route path='/checkout/:checkoutId' element={<Checkout></Checkout>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
