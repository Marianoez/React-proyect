import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRouter from "./routes/MainRouter";
// import { CartProvider } from "./context/CartContext";

import { CartProvider } from "./context/CartContext";

const App = () => {
<<<<<<< HEAD
  return <MainRouter />;
=======
  return (
    <CartProvider>
      <MainRouter />
    </CartProvider>
  );
>>>>>>> router
};

export default App;
