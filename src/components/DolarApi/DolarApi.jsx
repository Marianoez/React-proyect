import React from "react";
import "./DolarApi.css";

const DolarApi = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://dolarhoy.com/i/cotizaciones/dolar-mep").then((res) => {
      setItems(res.data.dolar - mep);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div>s</div>
    </>
  );
};

export default DolarApi;
