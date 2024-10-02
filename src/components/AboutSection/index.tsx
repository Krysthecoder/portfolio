import { utilsData } from '../../utils/utilsData';

function AboutSection() {
  return (
    <div className="bg-red-50 w-full flex justify-center py-12" id="about">
      <div className="flex flex-col w-9/12 pl-8 py-4 gap-6 border-x-4 border-x-red-700">
        {utilsData.aboutContent.map((content) => {
          return (
            <div>
              <h1 className="text-3xl">{content.title}</h1>
              <p className="text-xl">{content.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutSection;
