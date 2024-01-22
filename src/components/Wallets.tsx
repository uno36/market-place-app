import UserConnect from "./UserConnect";
import Wallet from "./WalletsData";
import Header from './Header'


const Wallets = () => {
  return (
    <>
      <Header />
      <div className="collections-container">
        <h1 className="wallets-heading">
          Choose the wallet to connect
        </h1>
        <div className="row row-cols-1 row-cols-md-3 ">
          {Wallet.map((data, index) => (
            <UserConnect key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );};

  
export default Wallets;
