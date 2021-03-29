import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import Client from "./components/Clients/Client";
import SignUp from "./components/SignUp/SignUp";
import NavBar from "./components/NavBar/NavBar";

const App = () => {

  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/clients" exact component={Client} />
        <Route path="/register" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
