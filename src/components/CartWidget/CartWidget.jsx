import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

const CartWidget = () => {
  const contador = 0;
  return (
    <>
      <div className="CartWidgetContainer">
        <div>
          <FontAwesomeIcon
            id="icon"
            icon={faCartShopping}
            bounce
            size="2x1"
            /* style={{ color: "rgb(111, 111, 111)" }} */
          />
        </div>
        <div className="contadorContainer">{contador}</div>
      </div>
    </>
  );
};

export default CartWidget;
