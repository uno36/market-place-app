import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarouselNFT from "./CarouselNFT";
import CollectionData from "./collectionData";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { addBoughtNFT, decreaseWalletAmount, setSelectedNFT } from "../redux/slice";

const Collection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleBuy = (id: number) => {
    const selectedNFT = CollectionData.find((nft) => nft.id === id);
    if (selectedNFT) {
      dispatch(decreaseWalletAmount(selectedNFT.price));
      dispatch(setSelectedNFT(selectedNFT))
      dispatch(addBoughtNFT());
      navigate('/account')
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
    </>
  );
};

export default Collection;
