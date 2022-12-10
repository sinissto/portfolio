import './Menu.scss';

const Menu = (props) => {
  const classMenu = props.menuOpen ? 'menu active' : 'menu';

  return (
    <div className={classMenu}>
      <ul className="menuList">
        <li className="menuListItem">
          <a href="#intro" onClick={props.onClick}>
            Home
          </a>
        </li>
        <li className="menuListItem">
          <a href="#portfolio" onClick={props.onClick}>
            Portfolio
          </a>
        </li>
        <li className="menuListItem">
          <a href="#work" onClick={props.onClick}>
            Works
          </a>
        </li>
        <li className="menuListItem">
          <a href="#testimonials" onClick={props.onClick}>
            Testimonials
          </a>
        </li>
        <li className="menuListItem">
          <a href="#contact" onClick={props.onClick}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
