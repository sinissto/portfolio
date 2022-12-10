import './TopBar.scss';

import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const TopBar = () => {
  return (
    <div className="topbar">
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
        <div className="right">ovo je desno</div>
      </div>
    </div>
  );
};

export default TopBar;
