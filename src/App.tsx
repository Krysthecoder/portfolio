import './App.css';
import IntroSection from './components/IntroSection';
import TransitionSection from './components/TransitionSection';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <>
      <IntroSection />
      <TransitionSection title="About" />
      <SkillsSection />
    </>
  );
}

export default App;
