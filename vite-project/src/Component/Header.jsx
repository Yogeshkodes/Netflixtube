import Logo from "../image/Netflix_Logo_PMS.png";

function Header() {
  return (
    <div className="absolute bg-gradient-to-b from-black px-4 py-2">
      <img src={Logo} alt="Netflix-logo" className="w-44" />
    </div>
  );
}

export default Header;
