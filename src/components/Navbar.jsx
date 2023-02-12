import VerticalLine from './VerticalLine';

const Navbar = () => {
  return (
    <nav className="big-nav">
      <VerticalLine />
      <nav className="navbar">
        <div className="logo">
          <h1>
            Quami <span>Killy</span>
          </h1>
        </div>
        <div className="menu">
          <nav>
            <a href="/">Home</a>
            <a href="/">About Me</a>
            <a href="/">Contact</a>
          </nav>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
