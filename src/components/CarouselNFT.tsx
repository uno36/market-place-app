import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Carousel = () => {
  return (
    <>
      <div className="carousel-card d-none d-lg-block">
        <Card className="carousel-bgcolor">
          <div className="carousel-card-container">
            <Card.Body>
              <Button className="carousel-btn1">Trending Now</Button>
              <br />
              <span className="carousel-span">Collection</span>
              <Card.Title className="carousel-title">Night Sky</Card.Title>
              <Card.Text className="nft-text">
                Lorem ipsum dolor sit amet, consectetur adicing elit, sed do
                eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing
                elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet,
                consectetur adicing elit, sed do eiusmod tempo
              </Card.Text>
              <div className="user-div d-flex">
                <img src="../images/profile1.png" alt="profile" />
                <div className="user">
                  <span className="profile-span">Artist</span>
                  <br />
                  Léa Jacquot
                </div>
              </div>              
            </Card.Body>
            <div className="carousel-img">
              <Card.Img variant="top" src="../images/Carousel-img1.png" />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Carousel;
