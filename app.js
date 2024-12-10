import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "This is React Heading");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
