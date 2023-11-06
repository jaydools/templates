import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Hero from "./Components/Hero/Hero"
import Header from "./Components/Header/Header"

function App() {
  // State to keep track of the selected templates
  const [selectedNavBar, setSelectedNavBar] = useState(null);
  const [selectedHero, setSelectedHero] = useState(null);

    return (
        <BrowserRouter>
            <Header selectedTemplate={selectedNavBar} onTemplateSelect={setSelectedNavBar} />
            <Hero selectedTemplate={selectedHero} onTemplateSelect={setSelectedHero} />
            {/* Add more template components here */}
        </BrowserRouter>
  );
}

export default App;