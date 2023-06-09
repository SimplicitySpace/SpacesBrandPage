import { useState } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';
import Projects from './Components/Projects/Projects';
import ProjectList from './Components/Projects/Projectlist';
import ServicesList from './Components/Services/ServicesList';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
function App() {


  const [servicelist, setservicelist] = useState(ServicesList)
  const [list, setlist] = useState(ProjectList)
  return (


    <div className="App">
      <Navigation />
      <Hero />
      <Services list={servicelist} />
      <Projects list={list} />
      <Footer />
    </div>


  );
}

export default App;
