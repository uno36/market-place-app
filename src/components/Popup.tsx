import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { LuCopy } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

interface PopupProps {
  show: boolean;
  handleClose: () => void;
  walletAmount: number;
  boughtNFT: { id: number; imgsrc: string } | null;
  boughtNFTs?: { id: number; imgsrc: string }[];
  handleBuy: () => void;
}

const Popup: React.FC<PopupProps> = ({
  show,
  handleClose,
  walletAmount,
  boughtNFTs = [],
  boughtNFT = null,
  handleBuy,
}) => {
  const navigate = useNavigate();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src="../images/Ellipse.png" alt="Ellipse" />
          <span className="number">STV6Q...4Z7WD</span> <LuCopy />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="wallet-text">
          In your wallet
          <br /> <span className="wallet-amount">{walletAmount} BTC</span>
        </p>
        {boughtNFTs.length > 0 ? (
          <>
            <p className="NFT-amount">Your NFTs</p>
            {boughtNFTs.map((boughtNFT) => (
              <img
                key={boughtNFT.id}
                src={boughtNFT.imgsrc}
                alt={`Bought NFT ${boughtNFT.id}`}
                className="img-fluid"                
              />
            ))}
          </>
        ) : boughtNFT ? (
          <>
            <p className="NFT-amount">Your NFT</p>
            <img
              src={boughtNFT.imgsrc}
              alt={`Bought NFT ${boughtNFT.id}`}
              className="img-fluid"
            />
          </>
        ) : (
          <p className="No-NFT">No NFTs in your account</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button className="shop" onClick={handleClose}>
          Close
        </Button>
        <Button
          className="shop"
          onClick={() => {
            handleBuy();
            navigate("/collection");
          }}
        >
          Start Shopping
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
