import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import AboutUs from './AboutUs.jsx'
import Products from './Products.jsx'
import Work from './Work.jsx'
import FourthSlide from './FourthSlide.jsx'
import Bins from './Bins.jsx'
import QaldyqApp from './QaldyqApp.jsx'

function App() {
  return (
    <>
      <Header/>
      <AboutUs/>
      <Products/>
      <Work/>
      <Bins/>
      <FourthSlide/>
      <QaldyqApp/>
    </>
  )
}

export default App
