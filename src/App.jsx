import './App.css'
import Details from './components/Details/Details.jsx';
import Item from './components/Item/Item.jsx'
import products from './data.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className='title'>Lego Minecraft<sup>®</sup></h1>
      <div className="item-container">
          <Routes>
            <Route path='/' element={<Item products={products} />} />
            <Route path='/cards/:title' element={<Details products={products}></Details>}></Route>
          </Routes>
      </div>
    </>
  )
}

export default App
