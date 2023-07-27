import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Login/Login";
import InternetConnection from "./util/InternetConnection";

function App() {
  return (
    <div id="layout-wrapper">
       <Home/>
       {/* <InternetConnection/> */}
       {/* <Login/> */}

    </div>
  );
}

export default App;
