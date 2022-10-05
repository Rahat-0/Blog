import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Post from "./pages/Post";

function App() {

 

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/post/:id" element={ <Post />} />
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
