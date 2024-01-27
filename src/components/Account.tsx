import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "./Carousel";
import Collections from "./Collections";
import { useDispatch } from "react-redux";
import { setShowPopup, addBoughtNFT } from "../redux/slice";
import Footer from "./Footer";



const Account = () => {
  const dispatch = useDispatch();
  
  const handleShowPopup = () => {    
    dispatch(setShowPopup(true));    
    dispatch(addBoughtNFT());
  };
  

  return (
    <>
      <div className="nav-container">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#" className="market">
              MARKETPLACE.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              />
              <Button
                variant="btn-success"
                className="connect"
                onClick={handleShowPopup}
              >
                Account
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Carousel />
      <Collections />
      <Footer />
      
    </>
  );
};

export default Account;
