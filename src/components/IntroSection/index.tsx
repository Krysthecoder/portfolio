import Portrait from './../../assets/Portrait.jpeg';
import { utilsData } from '../../utils/utilsData';

function IntroSection() {
  return (
    <div className="h-screen bg-red-50">
      <div className="w-8/12 h-screen items-center justify-center mx-auto flex flex-col gap-4">
        <div className="mx-auto ">
          <img
            src={Portrait}
            alt="Self-Portrait"
            className="rounded-full w-52 h-52 object-cover transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale"
          />
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-6xl font-roboto font-semibold text-red-700">
            {utilsData.devName.toUpperCase()}
          </p>
          <p className="text-2xl font-roboto font-semibold text-teal-500">
            {utilsData.mainLanguage.split(' ').join(' and ')} developer.
          </p>
          <ul className="flex text-md gap-3 text-red-900">
            <li className="relative group">
              <a href="">About</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className="relative group">
              <a href="">Skills</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className="relative group">
              <a href="">Portfolio</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className="relative group">
              <a href="">Services</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className="relative group">
              <a href="">Certifications</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className="relative group">
              <a href="">Download CV</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className="relative group">
              <a href="">Contact me</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full group-hover:transition-all"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
