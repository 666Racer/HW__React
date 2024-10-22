import Arrivals from "../Arrivals";
import Slider from "./Elements/Slider";
import Info from "./Elements/Info";
import Suggestions from "./Elements/Suggestions";

const SinglePage = () => {
  return (
    <div>
      <Arrivals />
      <Slider />
      <Info />
      <Suggestions />
    </div>
  );
};

export default SinglePage;
