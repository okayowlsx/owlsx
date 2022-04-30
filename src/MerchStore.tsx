import cube1 from "./gold1.png";
import cube2 from "./silver1.png";
import cube3 from "./platinum1.png";
import cube4 from "./silver2.png";
import banner from "./banner.png";
import degoddess from "./degoddess.gif";
import degod from "./degod.gif";
import hood1 from "./hood1.png";
import tshirt from "./tshirt.png";
import hood2 from "./hood2.png";

// import cube6 from "./silver3.png";
// import cube7 from "./platinum2.png";
// import cube8 from "./black1.png";
// import cube9 from "./platinum3.png";
// import cube10 from "./silver4.png";
// import cube11 from "./gold3.png";
// import cube12 from "./silver5.png";
// import cube13 from "./platinum4.png";
// import cube14 from "./silver6.png";
// import cube15 from "./gold4.png";

export default function MerchStore() {
  return (
    <div className="displayDiv">
      <div className="textHolder">
        <h1>
          <span className="gradTextFancyFontWhiteBlue">Merch sneaks.</span>
        </h1>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="hold">
        <div className="innerHold">
          <div className="inner col1">
            {/* <h2 className="gradTextFancyFontPink">column won</h2> */}
            <img alt=" " className="degoddessImage" src={hood1} />
          </div>
        </div>
        <div className="innerHold">
          <div className="inner col2">
            {/* <h2 className="gradTextFancyFontPink">column won</h2> */}
            <img alt=" " className="degoddessImage" src={tshirt} />
          </div>
        </div>

        <div className="innerHold">
          <div className="inner col3">
            <img alt=" " className="degoddessImage" src={hood2} />
          </div>
        </div>
        <div className="clear"></div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <br></br>
      {/* <div className="imageHolder">
        <img alt=" " className="reducedSampleImage2" src={banner} />
      </div> */}
    </div>
  );
}
