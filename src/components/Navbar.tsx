function Navbar() {
  return (
    <nav className="nav">
      <img
        className="nav-logo"
        src={require("../images/world.svg").default}
        alt=""
      />
      <h1 className="nav--title">my travel journal.</h1>
    </nav>
  );
}

export default Navbar;
