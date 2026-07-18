
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import DigitalsTools from './Components/DigitalsTools/DigitalsTools'
import Navbar from './Components/Navbar/Navbar'
import Stats from './Components/Stats/Stats'
import Steps from './Components/Steps/Steps'
import Pricing from './Components/Pricing/Pricing'
import Footer from './Components/Footer/Footer'
import Ready from './Components/Ready/Ready'
import { ToastContainer } from 'react-toastify'

const fetchTools = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

const fetchPricing = async () => {
  const res = await fetch ('/pricingData.json');
  return res.json();
}

function App() {

  const toolsPromise = fetchTools();
  // declared cart use state
  const [addCart, setAddCart] = useState([]);

  const pricePromise = fetchPricing();



  return (
    <>
      <div className='body'>
        <Navbar addCart={addCart} setAddCart={setAddCart}></Navbar>
        <Banner></Banner>
        <Stats></Stats>
        <Suspense fallback={<p>Loading...</p>}>
          <DigitalsTools toolsPromise={toolsPromise} addCart={addCart} setAddCart={setAddCart}></DigitalsTools>
        </Suspense>
        <Steps></Steps>
        <Suspense fallback = {<p>Loading...</p>}>
          <Pricing pricePromise={pricePromise}></Pricing>
        </Suspense>
        <Ready></Ready>
        <Footer></Footer>
      </div>


      <ToastContainer />
    </>
  )
}

export default App
