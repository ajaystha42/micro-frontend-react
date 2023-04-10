import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import Header from "home/Header";
import Footer from "home/Footer";
// const Header = React.lazy(() => import("home/Header"));
import "./index.scss";
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
    <div className="my-10">PDP Page COntent</div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
