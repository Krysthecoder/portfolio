import './App.css';
import IntroSection from './components/IntroSection';
import TransitionSection from './components/TransitionSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <TransitionSection title="Skills" />
      <SkillsSection />
      <TransitionSection title="Projects" />
      <ProjectsSection />
    </>
  );
}

export default App;
