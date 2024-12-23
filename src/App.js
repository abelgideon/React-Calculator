import React from "react";
import { useState } from "react";

const App = (props) => {
  const [input, setInput] = useState("0");
  const [statement, setStatement] = useState("");

  const handleInput = (num) => {
    setStatement(statement + num);
    if (input === "0") {
      setInput(input.slice(1) + num);
    } else {
      setInput(input + num);
    }
  };

  const calculate = () => {
    setInput(eval(statement));
    setStatement(eval(statement));
  };

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="row g-1 text-center">
        <div id="display-container" className="col-12">
          <p id="display" className="m-0 p-3 bg-secondary fs-4">
            {input}
          </p>
        </div>
        <div
          onClick={() => {
            setInput("0");
            setStatement("");
          }}
          id="clear"
          className="col-6"
        >
          <p className="m-0 p-3 bg-light fs-4">AC</p>
        </div>
        <Button id="divide" num="/" size="3" handleInput={handleInput} />
        <Button id="multiply" num="*" size="3" handleInput={handleInput} />
        <Button id="seven" num="7" size="3" handleInput={handleInput} />
        <Button id="eight" num="8" size="3" handleInput={handleInput} />
        <Button id="nine" num="9" size="3" handleInput={handleInput} />
        <Button id="subtract" num="-" size="3" handleInput={handleInput} />
        <Button id="four" num="4" size="3" handleInput={handleInput} />
        <Button id="five" num="5" size="3" handleInput={handleInput} />
        <Button id="six" num="6" size="3" handleInput={handleInput} />
        <Button id="add" num="+" size="3" handleInput={handleInput} />
        <Button id="one" num="1" size="3" handleInput={handleInput} />
        <Button id="two" num="2" size="3" handleInput={handleInput} />
        <Button id="three" num="3" size="3" handleInput={handleInput} />
        <Button id="decimal" num="." size="3" handleInput={handleInput} />
        <Button id="zero" num="0" size="9" handleInput={handleInput} />
        <div onClick={calculate} id="equals" className="col-3 clickable">
          <p className="m-0 p-3 bg-danger fs-4">=</p>
        </div>
      </div>
    </div>
  );
};

const Button = ({ id, num, size, handleInput }) => {
  return (
    <div onClick={() => handleInput(num)} className={`col-${size} clickable`}>
      <p id={id} className="m-0 p-3 bg-light fs-4">
        {num}
      </p>
    </div>
  );
};

export default App;
