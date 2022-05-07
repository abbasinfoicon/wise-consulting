import React from 'react'
import Footer from './lib/Footer';
import Header from './lib/Header';
import Index from './router/Index';


const App = () => {
  // console.log("img-path: ", window.location.origin);
  return (
    <>
      <Header />
      
      <Index />

      <Footer />
    </>
  )
}

export default App
