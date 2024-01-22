import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { LuCopy } from "react-icons/lu";

interface PopupProps {
  show: boolean;
  handleClose: () => void;
  walletAmount: number;
  boughtNFTs: { id: number; imgsrc: string }[];
  boughtNFT: { id: number; imgsrc: string } | null;
  handleBuy: () => void;
}

const Popup: React.FC<PopupProps> = ({
  show,
  handleClose,
  walletAmount,
  boughtNFT = { id: 2, imgsrc: '../images/NFT2.png' },
  handleBuy,
}) => {
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
        {boughtNFT ? (
          <>
            <p className="NFT-amount">Your NFTs</p>
            <img
              src={boughtNFT.imgsrc}
              alt="Bought NFT"
              className="img-fluid"
            />
          </>
        ) : (
          <p className="No-NFT">No NFTs in your account</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleBuy();
          }}
        >
          Start Shopping
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
