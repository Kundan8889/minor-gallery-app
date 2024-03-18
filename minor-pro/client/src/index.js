// A: React library ko import kiya gaya hai user interfaces banane ke liye.
import React from "react";

// B: ReactDOM library ko import kiya gaya hai React components ko DOM mein render karne ke liye.
import ReactDOM from "react-dom";

// C: Application ka root component import kiya gaya hai.
import App from "./App";

// D: BrowserRouter ko import kiya gaya hai React applications mein routing ke liye.
import { BrowserRouter } from "react-router-dom";

// E: Provider ko import kiya gaya hai react-redux se Redux store ko application mein provide karne ke liye.
import { Provider } from "react-redux";

// F: Redux store ko import kiya gaya hai.
import store from "./redux/store";

// G: ReactDOM.createRoot ka upyog karke root element banaya gaya hai React components ko render karne ke liye.
const root = ReactDOM.createRoot(document.getElementById("root"));

// H: Root component ko necessary providers aur strict mode ke saath render kiya gaya hai.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode> 
);
