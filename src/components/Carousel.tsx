import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CollectionData from "./collectionData";
import { Link } from "react-router-dom";
import {
  decreaseWalletAmount,
  setShowPopup,
  setSelectedNFT,
} from "../redux/slice";
import Popup from "./Popup";

type NFT = {
  id: number;
  imgsrc: string;
  price: number;
};

const Carousel = () => {
  const dispatch = useDispatch();
  const selectedNFT = useSelector(
    (state: { app: { boughtNFT: NFT | null } }) => state.app.boughtNFT
  );

  const boughtNFTs = useSelector(
    (state: { app: { boughtNFTs: NFT[] } }) => state.app.boughtNFTs
  );

  const showPopup = useSelector(
    (state: { app: { showPopup: boolean } }) => state.app.showPopup
  );

  const walletAmount = useSelector(
    (state: { app: { walletAmount: number } }) => state.app.walletAmount
  );

  const handleBuy = (id: number) => {
    const selectedNFT = CollectionData.find((nft) => nft.id === id);
    if (selectedNFT) {
      dispatch(decreaseWalletAmount(selectedNFT.price));
      dispatch(setSelectedNFT(selectedNFT));
      dispatch(setShowPopup(true));
    }
  };

  const handleClosePopup = () => {
    dispatch(setShowPopup(false));
  };

  return (
    <>
      <div className="carousel-card d-none d-lg-block">
        <Card className="carousel-bgcolor">
          <div className="carousel-card-container">
            <Card.Body>
              <Button className="carousel-btn1">Trending Now</Button>
              <br />
              <span className="carousel-span">Night sky collection</span>
              <Card.Title className="carousel-title">With the stars</Card.Title>
              <div className="user-div d-flex">
                <img src="../images/profile1.png" alt="profile" />
                <div className="user">
                  <span className="profile-span">Artist</span>
                  <br />
                  Léa Jacquot
                </div>
              </div>
              <div className="d-flex">
                <Button
                  className="carousel-btn2 diff1"
                  onClick={() => handleBuy(2)}
                >
                  Buy
                </Button>
                <Link to="/collection">
                  <Button className="carousel-btn2 diff2">
                    See Collection
                  </Button>
                </Link>
              </div>
            </Card.Body>
            <div>
              <Card.Img variant="top" src="../images/Carousel-img1.png" />
            </div>
          </div>
        </Card>
      </div>

      {/* Render the Popup component */}
      <Popup
        show={showPopup}
        handleClose={handleClosePopup}
        walletAmount={walletAmount}
        boughtNFT={selectedNFT}
        boughtNFTs={boughtNFTs}
        handleBuy={() => {}}
      />
    </>
  );
};

export default Carousel;
