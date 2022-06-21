import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState("");
  return (
    <div className="App">
      <div className="container">
        <div className="container">
          <h2>calculator</h2>
        </div>

        <div className="row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              value={num1}
              onChange={(e) => setNum1(+e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              value={num2}
              onChange={(e) => setNum2(+e.target.value)}
            />
          </div>
        </div>
        <div className="btn">
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => setRes(num1 + num2)}
          >
            +
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => setRes(num1 - num2)}
          >
            -
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => setRes(num1 * num2)}
          >
            *
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => setRes(num1 / num2)}
          >
            /
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => setRes(num1 % num2)}
          >
            %
          </button>
        </div>
        <div className="res">
          <h2>{res}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
