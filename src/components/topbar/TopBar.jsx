import './TopBar.scss';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Sinisa's Portfolio
          </a>
          <div className="itemContainer"></div>
        </div>
        <div className="right">ovo je desno</div>
      </div>
    </div>
  );
};

export default TopBar;
