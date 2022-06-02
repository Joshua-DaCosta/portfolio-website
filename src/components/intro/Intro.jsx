import "./intro.scss";
import baki from '../../assets/baki.png';
import { KeyboardArrowDown } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";


const Intro = () => {

  const textRef = useRef();
  console.log(textRef);

  useEffect(() => {
   init(textRef.current, {
     showCursor: true,
     backDelay: 1500,
     backSpeed: 70,
     strings: ["Developer", "Designer", "Engineer"]
   });
  }, []);

  return (
    <div id="intro" className="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={baki} alt="baki" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Joshua Da Costa</h1>
          <h3>Software <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="arrow" />
        </a>
      </div>
    </div>
  );
  
 
}

export default Intro