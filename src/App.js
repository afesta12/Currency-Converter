import Form from "./Components/Form";

function App() {

  const getInput = (inp) => {

    console.log(inp);

  }


  return (
    <div className="App">
      
      <div className="wrapper">
      
        <Form onInput={getInput} />

      </div>

    </div>
  );
}

export default App;
