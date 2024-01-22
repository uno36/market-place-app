import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarouselNFT from "./CarouselNFT";
import CollectionData from "./collectionData";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import { useDispatch } from "react-redux";
import { addBoughtNFT } from "../redux/slice";

const Collection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [boughtNFTs, setBoughtNFTs] = useState<
    {
      id: number;
      imgsrc: string;
    }[]
  >([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleBuy = (id: number) => {
    const selectedNFT = CollectionData.find((nft) => nft.id === id);
    if (selectedNFT) {
      setBoughtNFTs((prevNFTs) => [...prevNFTs, selectedNFT]);
      handleShowPopup();
      navigate("/account");
      // Dispatch action to add bought NFT to the list
      dispatch(addBoughtNFT());
    }
  };

  return (
    <>
      <Header />
      <CarouselNFT />

      <h1 className="NFTs-heading">NFTs</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {CollectionData.map((data, index) => (
          <div
            key={data.id}
            className="image-container"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={data.imgsrc} alt="imgs" className="img-fluid" />
            <div className="NFTbtn">
              {hoveredIndex === index && (
                <button
                  className="buy-button"
                  onClick={() => handleBuy(data.id)}
                >
                  Buy <FaArrowRightLong />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Footer />

      <Popup
        show={showPopup}
        handleClose={handleClosePopup}
        walletAmount={2.5}
        boughtNFT={boughtNFTs.length > 0 ? boughtNFTs[boughtNFTs.length - 1] : null}
        boughtNFTs={boughtNFTs}
        handleBuy={() => handleBuy(0)}
        /> 
    </>
  );
};

export default Collection;
