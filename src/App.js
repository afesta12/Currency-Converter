import LargeInput from "./Components/LargeInput";
import Dropdown from "./Components/Dropdown";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      
      <div className="wrapper">
      
          <LargeInput title={"Amount"} />

          <div className="container__bottom">

            <div className="dropdown__row">
            
              <Dropdown title={"From"} name={"from"} />
              <Dropdown title={"To"} name={"to"} />
        
            </div>

            <Button />
          </div>

      </div>

    </div>
  );
}

export default App;
