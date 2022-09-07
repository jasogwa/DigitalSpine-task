import { useState } from "react";
import {
  Container,Wrapper,
  Title,Form,Input,
  Button, Linking
} from "./style";
import { publicUrl } from "../../requestUrl";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegister  = async (e) => {
    e.preventDefault(e)
    let user = {
        username:username,
        email:email,
        password:password
      }
    try {
      const res = await publicUrl.post("/register",user);
      alert(res.data.message+"\n click login to login")
    } catch (error){
      alert(error)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input 
            placeholder="username" 
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input 
            placeholder="email" 
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            placeholder="password" 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input 
            placeholder="confirm password" 
            type="password"
            //onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Button onClick={handleRegister}>CREATE</Button>
        </Form>
        
        <Link to={"/login"}>
          <Linking >LOGIN</Linking>
        </Link>

      </Wrapper>
    </Container>
  );
};

export default Register;