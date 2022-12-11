import './TopBar.scss';

import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const TopBar = (props) => {
  // console.log(props.menuOpen);

  // const classMenuButton = props.menuOpen ? 'topbar active' : 'topbar';

  return (
    <div className={props.menuOpen ? 'topbar active' : 'topbar'}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genious.
          </a>
          <div className="itemContainer">
            <PhoneIcon className="icon" />
            <span>+381 63 389 762</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>sinisha.stojanovic@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={props.onClick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
