import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import StarRating from "./components/StarRating.jsx";
import Filter from "./practiceComps/Filter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Filter/>
  {
    /*<App/> */
  }

    {/*  <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      size={24}
      color="red"
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />  <StarRating maxRating={10} />
    <StarRating  />*/}
  </React.StrictMode>
);
