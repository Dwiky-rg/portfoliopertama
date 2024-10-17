import Logo from "../assets/Logo.png";

function Header() {
  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1CJvNRE2S-Kn6VRqOcg-qSWU14s7UAgr2/view?usp=drivesdk",
      "_blank"
    );
  };
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img
              src={Logo}
              className="logo h-[48px] w-auto"
              alt="Image Header"
            />
          </a>
          <button
            className="hidden lg:block btn btn-sm"
            onClick={handleButtonClick}
          >
            Download My CV
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
