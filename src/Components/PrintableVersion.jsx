import ReactToPrint from "react-to-print";
import App from "./App";

export default function PrintableVersion() {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <App ref={componentRef} />
    </div>
  );
};