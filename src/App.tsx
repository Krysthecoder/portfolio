import './App.css';
import IntroSection from './components/IntroSection';
import TransitionSection from './components/TransitionSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <TransitionSection title="Skills" />
      <SkillsSection />
      <TransitionSection title="Projects" />
      <ProjectsSection />
      <TransitionSection title="Services" />
      <ServicesSection />
    </>
  );
}

export default App;
