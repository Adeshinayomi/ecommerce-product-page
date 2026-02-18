import { use, useState } from 'react'
import { Header } from './component/Header.jsx'
import { Hero } from './component/Hero.jsx'
import { Modal } from './component/Modal.jsx'
import './App.css'

function App() {
  const [cart,setCart]=useState({})

  function loadCart(product){
    setCart({
      image:product.image,
      name:product.name,
      quantity:product.quantity,
      price:product.price
    })
  }
  function deleteItem(){
    setCart({})
  }
  return (
    <>
      <Header cart={cart} loadCart={loadCart} deleteItem={deleteItem}/>
      <Hero cart={cart} loadCart={loadCart} />
      <Modal/>
    </>
  )
}

export default App
