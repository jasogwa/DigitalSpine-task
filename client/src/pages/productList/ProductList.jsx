import Nav from "../../components/navbar/Nav";
import Advert from "../../components/advert/Advert";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";
import {
  Container, Title,
  FilterContainer, Filter,
  FilterText, Select, Option
} from "./style";
//import { useLocation } from "react-router-dom";
import { useState } from "react";


const ProductList = () => {
  //const location = useLocation();
  //const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    });
  };
  
  return (
    <Container>
      <Advert />
      <Nav />
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Availability:</FilterText>
          <Select name="available" onChange={handleFilters}>
            <Option>
              In Stock ?
            </Option>
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
        </Filter>
        
      </FilterContainer>
      <Products filters={filters}  />
      <Footer />
    </Container>
  )
}

export default ProductList
