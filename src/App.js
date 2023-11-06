import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Hero />
        {/* <Products /> */}
    </BrowserRouter>
  );
}

export default App;
