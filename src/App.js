import TopBar from './components/topbar/TopBar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/work/Work';
import Testimonials from './components/testemonials/Testimonials';
import Contact from './components/contact/Contact';

import './App.scss';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
