import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import Footer from "home/Footer";
const Header = React.lazy(() => import("home/Header"));
import "./index.scss";

const App = () => {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<div className="pt-2 text-center">Loading...</div>}>
        <Header />
      </Suspense>
      {/* check network tab for js section */}
      {/* {!showHeader && (
        <button className="text-3xl" onClick={() => setShowHeader(true)}>
          Show the header
        </button>
      )} */}
      <div className="my-10">PDP Page COntent</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
