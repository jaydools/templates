import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
            <Switch>
                <Route path="/" exact>
                {/* The homepage where users can select templates */}
                    <Header
                        selectedTemplate={selectedNavBar}
                        onTemplateSelect={setSelectedNavBar}
                    />
                    <Hero
                        selectedTemplate={selectedHero}
                        onTemplateSelect={setSelectedHero}
                    />
                </Route>
                <Route path="/nav/:templateId">
                {/* Individual navigation bar template preview */}
                    <Header />
                </Route>

                <Route path="/hero/:templateId">
            {/* Individual hero section template preview */}
                    <Hero />
                </Route>
            </Switch>
        </BrowserRouter>
  );
}

export default App;
