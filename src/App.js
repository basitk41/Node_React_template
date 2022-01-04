import React, { memo, useEffect } from "react";
import "./App.scss";
import { Button } from "./Styles/Styles";
const App = () => {
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>hi</h1>
      <Button title={"Add"} />
    </div>
  );
};

export default memo(App);
