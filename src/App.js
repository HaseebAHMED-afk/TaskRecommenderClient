import React  from "react";
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom'
import Navigator from "./Components/Navigator";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
   <Router>
    <Navigator />
    <ToastContainer />
   </Router>
  );
};

export default App;
