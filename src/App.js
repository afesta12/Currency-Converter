import { useState } from "react";
import Form from "./Components/Form";
import Output from "./Components/Output";

function App() {

  const [text, setText] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('')

  const getInput = (currencyInput) => {

    const from = currencyInput["convertFrom"];
    const to = currencyInput["convertTo"];
    const amount = currencyInput["num"].toFixed(2);

    const requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {

      const response = request.response;

      const res = response.result;
      
      setText(res.toFixed(2))
      
    }

    setFrom(from);
    setTo(to);
    setAmount(amount);

  }

  return (
    <div className="App">
      
      <div className="wrapper">
      
        <Form onInput={getInput} />
        <Output text={text} from={from} to={to} amount={amount} />

      </div>

    </div>
  );
}

export default App;
