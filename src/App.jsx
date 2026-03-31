import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Counter from './Components/Counter/Counter'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'

function App() {

  const fetchProductsData = async () => {
    const res = await fetch("/product-data.json");
    return res.json();
  }
  const prductsResponse = fetchProductsData();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <h2 className='text-3xl md:text-5xl font-extrabold text-[#101727] text-center mb-5'>Premium Digital Tools</h2>
      <p className='text-[#627382] text-center mb-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      <div className='flex justify-center mb-5 md:mb-10'>
        <button className='btn rounded-full'>Products</button>
        <button className='btn rounded-full'>Cart(<span>0</span>)</button>
      </div>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Products prductsResponse={prductsResponse}></Products>
      </Suspense>
    </>
  )
}

export default App
