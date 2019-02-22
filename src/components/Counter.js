import React from "react";
import { withRouter } from "dva/router";
import queryString from "query-string";

const Counter = ({ dispatch, counter, history }) => {
  return (
    <div>
      <h1>{counter.count}</h1>
      <button
        onClick={() => {
          const Manu = { name: "Manu", age: 42 };
          const stringifiedManu = queryString.stringify(Manu);
          history.push(`/?${stringifiedManu}`);
        }}
      >
        Go back home
      </button>
      <button
        onClick={() => {
          history.push(`/counter`);
        }}
      >
        Go Counter
      </button>
      <button
        onClick={() => {
          dispatch({ type: "counter/add" });
        }}
      >
        +
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "counter/addAsync" });
        }}
      >
        Async +
      </button>
    </div>
  );
};

Counter.propTypes = {};

export default withRouter(Counter);
