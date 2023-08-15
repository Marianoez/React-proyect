import logoGris from "../../assets/Images/gris1.png";
import "./LogoHeader.css";
import img from "../../assets/Icons/carrito.png";

const LogoHeader = () => {
  return (
    <>
      <div id="LogoContainer">
        <img id="LogoMain" src={logoGris} alt="Logo MS" />
      </div>
    </>
  );
};

export default LogoHeader;
