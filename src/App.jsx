import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Experience } from './components/Experience/Experience';
import { Skill } from './components/Skill/Skill';
import { Portofolio } from './components/Portofolio/Portofolio';
import { Award } from './components/Award/Award';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="project">
        <Portofolio />
      </div>
      <div id="award">
        <Award />
      </div>
      <Footer />
    </div>
  )
}

export default App