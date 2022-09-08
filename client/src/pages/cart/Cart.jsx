import { Add, Remove } from "@material-ui/icons";
import Advert from "../../components/advert/Advert";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/navbar/Nav";
import { 
  Container, Wrapper,
  Title, Top, TopButton,
  TopTexts, TopText, Bottom,
  Info, Product, ProductDetail,
  Image, Details, ProductName,
  ProductId,ProductSize, PriceDetail,
  ProductAmountContainer, Hr,
  ProductAmount, ProductPrice,
  Summary, SummaryTitle, SummaryItem,
  SummaryItemText,SummaryItemPrice,
  Button,
} from "./style";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
const STRIPE_PUBLIC_KEY = 'pk_test_51Lf26FHKr1AJKPMvC6nKgIGggMPzzPTIt73Gcmz7BHnlitJswL6YgWkaY4YXq7ah0CCmRj2JbbjPtNSWgk2xXqxe00ypdjtx3O';
const  KEY = STRIPE_PUBLIC_KEY;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);
    return (
      <Container>
        <Nav />
        <Advert />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag</TopText>
              <TopText>Your Wishlist </TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {cart.products.map((product) => (
                <Product>
                  <ProductDetail>
                    <Image src= {product.display_image} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>Category:</b> {product.category}
                      </ProductId>
                      <ProductSize>
                        <b>Brand:</b> {product.brand}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>{product.value * product.quantity} {product.currency.toLowerCase()}</ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>{cart.total} euro</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Tax</SummaryItemText>
                <SummaryItemPrice> {cart.total * 0.02} euro</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>{cart.total + (cart.total * 0.02)} euro</SummaryItemPrice>
              </SummaryItem>
              <StripeCheckout
                name="Lama Shop"
                image="https://avatars.githubusercontent.com/u/1486366?v=4"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
              <Button>PAYMENT</Button>
            </StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    );
  };
  
  export default Cart;