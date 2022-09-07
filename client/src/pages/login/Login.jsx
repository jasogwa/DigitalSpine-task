import { useState } from "react";
import { login } from "../../redux/loginApi";
import { useDispatch,useSelector } from "react-redux";
import { 
  Container ,Wrapper,
  Title, Form,Error,
  Input, Button,Linking
} from "./style";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state)=>state.user);

  const handleLogin = (e) => {
    e.preventDefault(e)
    login(dispatch, {email,password})
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input 
            placeholder="email" 
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            placeholder="password" 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
          {
           error &&
            <Error>Email,Password combination wrong</Error>
          }
          
          <Link to={"/register"}>
            <Linking>SIGN UP</Linking>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;