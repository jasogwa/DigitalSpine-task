import { Link } from "react-router-dom";
import { 
  Container ,
  Image, Info,
  Title,Icon
} from "./style";

const Product = ({item}) => {
  return (
    <Container>
    <Image src={item.display_image} />
    <Info>
      <Title>{item.title}</Title>
      <Link to={`/product/${item.id}`}>
        <Icon>View item</Icon>
      </Link>
    </Info>
  </Container>
  )
}

export default Product;