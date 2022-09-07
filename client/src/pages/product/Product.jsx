import { Add, Remove } from "@material-ui/icons";
import Nav from "../../components/navbar/Nav";
import Advert from "../../components/advert/Advert";
import Footer from "../../components/footer/Footer";
import {
  Container,ImgContainer,
  Wrapper,Image,Title,
  Desc,Price,FilterContainer,
  AddContainer,AmountContainer,
  Amount,Button,InfoContainer,
  Filter,FilterTitle,Span
} from "./style";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { privateUrl } from "../../requestUrl";
import { addProduct } from "../../redux/cart.redux";
import { useDispatch } from "react-redux";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await privateUrl.get("/product/" + id);
        setProduct(res.data[0]);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (param) => {
    if(param === "decrease"){
      quantity > 1 && setQuantity(quantity - 1);
    }else{
      setQuantity(quantity + 1);
    }
  }

  const handleClick = () =>{
    dispatch(addProduct({...product, quantity }));
  }

  return (
    <Container>
        <Advert />
        <Nav />
            <Wrapper>
                <ImgContainer>
                <Image src={product.display_image} />
                </ImgContainer>
                <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.description}</Desc>
                <Price>{product.value} {product.currency}</Price>
                <FilterContainer>
                    <Filter>
                      <FilterTitle>Category</FilterTitle>
                      <Span>{product.category}</Span>
                    </Filter>
                    <Filter>
                      <FilterTitle>Brand</FilterTitle>
                      <Span>{product.brand}</Span>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                    <Remove onClick={()=>handleQuantity("decrease")} />
                    <Amount>{quantity}</Amount>
                    <Add onClick={()=>handleQuantity("increase")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
                </InfoContainer>
            </Wrapper>
        <Footer />
    </Container>
  )
}

export default Product;