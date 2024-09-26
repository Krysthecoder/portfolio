import Portrait from './../../assets/Portrait.jpeg';
import { utilsData } from '../../utils/utilsData';

function IntroSection() {
  return (
    <div className="h-screen">
      <div className="w-8/12 h-screen items-center justify-center mx-auto flex flex-col gap-2">
        <div className="mx-auto ">
          <img
            src={Portrait}
            alt="Self-Portrait"
            className="rounded-full w-52 h-52 transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale"
          />
        </div>
        <p className="text-7xl">Krysthopher Ruiz</p>
        <p className="text-2xl">
          {utilsData.mainLanguage.split(' ').join(' and ')} developer.
        </p>
        <ul className="flex text-sm gap-2">
          <li>About</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Certifications</li>
          <li>Download CV</li>
          <li>Contact me</li>
        </ul>
      </div>
    </div>
  );
}

export default IntroSection;
