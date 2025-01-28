import "./Header.scss";

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Emmanuel Ojiji
      </a>

      <nav>
        <a>Home</a>
        <a>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
