import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Certs from './components/Certs.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import ScrollTruck from './components/ScrollTruck.jsx';

export default function App() {
  return (
    <>
      <div className="progress" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Certs />
        <Education />
        <Contact />
      </main>
      <footer>
        <div className="wrap">
          <span>Aman Dhakad</span>
          <span>Built with React</span>
        </div>
      </footer>
      <ScrollTruck />
    </>
  );
}
