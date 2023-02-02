import { BasicPhone } from "./BasicPhone";
import { SmartPhone } from "./Smartphone";

function App() {
  let basicPhone = new BasicPhone(1, "Nokia", 1000);
  let smartPhone = new SmartPhone(2, "Iphone X", 50000);

  return (
    <div className="App">
      {console.log(
        basicPhone.mobileId +
          " " +
          basicPhone.mobileName +
          " " +
          basicPhone.mobileCost +
          " " +
          basicPhone.mobileType
      )}
      {console.log(
        smartPhone.mobileId +
          " " +
          smartPhone.mobileName +
          " " +
          smartPhone.mobileCost +
          " " +
          smartPhone.mobileType
      )}
    </div>
  );
}

export default App;
