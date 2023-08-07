import './App.css';
import HeaderComponent from "./components/header.component";
import WelcomeComponent from "./components/welcome.component";
import {useState} from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = () => {
        setIsLoggedIn(true)
    }

    const logOutHandler = () => {
        setIsLoggedIn(false)
    }

      return (
        <div className="App">
          <HeaderComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} loginHandler={loginHandler} logOutHandler={logOutHandler} />
          <WelcomeComponent isLoggedIn={isLoggedIn} />
        </div>
      );
}

export default App;
