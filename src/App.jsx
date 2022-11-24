import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { Page4 } from "./components/Page4";
import { Complete } from "./components/Complete";
import { Compatibility } from "./components/Compatibility";
import { Result } from "./components/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/page1" exact={true} element={<Page1 />} />
        <Route path="/page2" exact={true} element={<Page2 />} />
        <Route path="/page3" exact={true} element={<Page3 />} />
        <Route path="/page4" exact={true} element={<Page4 />} />
        <Route path="/complete" exact={true} element={<Complete />} />
        <Route path="/compatibility" exact={true} element={<Compatibility />} />
        <Route path="/result" exact={true} element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
