import Cardcomp from "./Cardcomp";
import Data from "./Data";
const Collections = () => {
  return (
    <>
      <div className="collections-container">
        <h1 className="collections-heading my-4">Collections</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {Data.map((data, index) => (
            <Cardcomp key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Collections;


