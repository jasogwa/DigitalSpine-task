import "./home.css"
import Advert from "../../components/advert/Advert"
import Nav from "../../components/navbar/Nav";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="container">
      <Advert />
      <Nav />
      <Products />
      <Footer />
    </div>
  )
}

export default Home
