import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Navbar/Nav.js';
import CountryList from './pages/CountryList/CountryList.js';
import SearchCountry from './pages/SearchCountry/SearchCountry.js';
import Todolist from './pages/TodoList/Todolist.js';
import Home from './pages/Home/Home.js';


function App() {
  return (

<Router>
  <Nav />
  <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<SearchCountry />}></Route>
      <Route path="/list" element={<CountryList />}></Route>
      <Route path="/todolist" element={<Todolist />}></Route>
      </Routes>
</Router>
  );
}

export default App;
