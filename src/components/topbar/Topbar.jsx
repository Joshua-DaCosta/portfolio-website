import './topbar.scss'
import { Person, Mail } from '@material-ui/icons'

const Topbar = ({menuOpen, setMenuOpen}) => {



  return (
    <div className={`topbar ${menuOpen && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Web Boyz
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>647-979-8407</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>joshua.0331@hotmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen? true: false)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar