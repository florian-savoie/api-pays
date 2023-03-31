import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Nav.js';
import CountryList from './CountryList.js';
import SearchCountry from './SearchCountry.js';
import Todolist from './Todolist.js';
import Home from './Home.js';
import Test from './Test.js';


function App() {
  return (

<Router>
  <Nav />
  <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<SearchCountry />}></Route>
      <Route path="/list" element={<CountryList />}></Route>
      <Route path="/todolist" element={<Todolist />}></Route>
      <Route path="/test" element={<Test />}></Route>
      </Routes>
</Router>
  );
}

export default App;
