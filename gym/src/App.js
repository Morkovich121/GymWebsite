import './App.css';
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Reasons from './components/Reasons/Reasons'
import Plans from './components/Plans/Plans'
import Testimonials from './components/Testimonials/Testimonials'
import Connect from './components/Connect/Connect'

function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Connect/>
          <p></p>
          <p></p>
    </div>
  );
}

export default App;
