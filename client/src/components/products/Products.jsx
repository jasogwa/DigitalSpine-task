import { Container } from "./style";
//import { popularProducts } from "../../data";
import  Product  from "../product/Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = (filters,sort) => {
  
  const [products, setProducts] = useState([]);
  //const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () =>{
      try {
        const res  = await axios.get("http://localhost:5000/products");
        setProducts(res.data);
      } catch (error) {}
    }
    getProducts()
  },[]);

  /*useEffect(()=>{
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  },[products,filters]);*/

  return (
    <Container>
      {
        products.map((item) => (
            <Product item={item} key={item.id} />
        ))
      }
    </Container>
  )
}

export default Products
