import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Counter from './Components/Counter/Counter'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import { ToastContainer, Zoom } from 'react-toastify';
import GetStarted from './Components/GetStarted/GetStarted'
import Pricing from './Components/Pricing/Pricing'
import Footer from './Components/Footer/Footer'

function App() {

  const fetchProductsData = async () => {
    const res = await fetch("/product-data.json");
    return res.json();
  }
  const prductsResponse = fetchProductsData();

  const [totalPrice, setTotalPrice] = useState(0);
  const handleTotalPrice = (price) => {
    setTotalPrice(totalPrice + price);
  }
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <h2 className='text-3xl md:text-5xl font-extrabold text-[#101727] text-center mb-5'>Premium Digital Tools</h2>
      <p className='text-[#627382] text-center mb-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Products prductsResponse={prductsResponse} handleTotalPrice={handleTotalPrice} totalPrice={totalPrice}></Products>
      </Suspense>
      <GetStarted></GetStarted>
      <Pricing></Pricing>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </>
  )
}

export default App
