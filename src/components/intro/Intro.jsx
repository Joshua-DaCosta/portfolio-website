import "./intro.scss";
import baki from '../../assets/baki.png';
import { KeyboardArrowDown } from "@material-ui/icons";



const Intro = () => {
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
          <h3>Developer</h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown/>
        </a>
      </div>
    </div>
  );
  
 
}

export default Intro