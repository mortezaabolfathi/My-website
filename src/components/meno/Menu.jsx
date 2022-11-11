import "./menu.scss";
const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#intro">مقدمه</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#portfolio">نمونه کارها</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#works">آثار</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#testimonials">توصیفات</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#contact">ارتباط با من</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
