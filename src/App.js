import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [data, setData] = useState([]); //Data from server
  const [product, setProduct] = useState({});
  const [isHover, setIsHover] = useState(true);

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=6')
    const data = await response.json();
    setData(data)
  }

  const onHover = id => {
    console.log(`Id: ${id}`);
    setProduct(data[id - 1])
    setIsHover(prevState => !prevState)
  }

  const renderAllProducts = () => (
    <div className="d-flex flex-row flex-wrap">
      {data.map(item => <ProductCard key={item.id} eachProduct={item} onHover={onHover} />)}
    </div>
  )

  const renderSingleProduct = () => <ProductCard key={product.id} eachProduct={product} />

  console.log(`Product details = ${JSON.stringify([product])}`)

  return (
    <>
      {isHover ? renderAllProducts() : renderSingleProduct()}
    </>
  )
}

export default App;