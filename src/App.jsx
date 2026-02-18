import { use, useState } from 'react'
import { Header } from './component/Header.jsx'
import { Hero } from './component/Hero.jsx'
import { Modal } from './component/Modal.jsx'
import './App.css'

function App() {
  const [cart,setCart]=useState({})
  const [showmodal,setShowmodal]=useState(false)

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
  function toggleModal(){
    if(showmodal){
      setShowmodal(false)
    }else{
      setShowmodal(true)
    }
  }
  return (
    <>
      <Header cart={cart} loadCart={loadCart} deleteItem={deleteItem}/>
      <Hero cart={cart} loadCart={loadCart} toggleModal={toggleModal}/>
      <div className='hidden md:grid'>
        <Modal showmodal={showmodal} toggleModal={toggleModal}/>
      </div>
    </>
  )
}

export default App
