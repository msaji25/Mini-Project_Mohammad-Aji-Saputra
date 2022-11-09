import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

const Layout = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <h1> Cars Store </h1></Navbar.Brand>
      </Navbar>
      <Container>{props.children}</Container>
    </>
  );
};
export default Layout;
