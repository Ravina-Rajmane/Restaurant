import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Menu from './Component/Menu'
import Product from './Component/Product'
import Review from './Component/Review'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Menu></Menu>
      <Product></Product>
      <Review></Review>
      <Contact></Contact>
      <Blog ></Blog>
      <Footer></Footer>
     
    
    </div>
  )
}

export default App