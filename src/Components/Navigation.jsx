const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="./brand_logo.png" alt="logo" />
      </div>
      <ul className="menu_bar" style={{cursor: 'pointer'}}>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>

      <button style={{cursor: 'pointer'}}>Login</button>
    </nav>
  );
};

export default Navigation;
