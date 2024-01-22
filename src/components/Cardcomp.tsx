import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";

interface CardcompProps {
  data: {
    imgsrc: string;
    hoverbtn: string;
    title: string;
    text: string;
    btn: string;
    description: string;
    profileimg: string;
    artist: string;
    artistname: string;
  };
}

const Cardcomp: React.FC<CardcompProps> = ({ data }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <div
        className="coollections-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
            <Card className="card">
              <Card.Img className="card-img" variant="top" src={data.imgsrc} />
              {isHovered && (
                <div className="hover-button-container">
                  <Link to="/collection">
                    <Button className="hover-btn">
                      {data.hoverbtn} <FaArrowRightLong />{" "}
                    </Button>
                  </Link>
                </div>
              )}
              <Card.Body>
                <div className="titlebtn">
                  <Card.Title className="card-title">{data.title}</Card.Title>
                  <Button className="collections-btn">{data.btn}</Button>
                </div>
                <Card.Text className="card-text">
                  <span className="collections-span">{data.text}</span>
                  <br />
                  {data.description}
                </Card.Text>
                <div className="d-flex">
                  <img src={data.profileimg} alt="profile" />
                  <div className="user">
                    <span className="profile-span">{data.artist}</span>
                    <br />
                    {data.artistname}
                  </div>
                </div>
              </Card.Body>
            </Card>
         
      </div>
    </>
  );
};

Cardcomp.propTypes = {
  data: PropTypes.shape({
    imgsrc: PropTypes.string.isRequired,
    hoverbtn:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    profileimg: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    artistname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cardcomp;
