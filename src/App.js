import React from "react";
import Main from "./Main";
import "./sass/main.scss";
import Badge from "./Badge";

const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Moodbooster</h1>
      <Main />
      <Badge />
    </div>
  );
};

export default App;
