import { utilsData } from '../../utils/utilsData';

function SkillsSection() {
  return (
    <div className="h-screen w-full bg-slate-100">
      <div className=" flex items-start justify-evenly gap-4 w-auto pt-32">
        {utilsData.skillsContent.map((skillsCard) => {
          return (
            <div className="flex flex-col gap-6 items-center common-card ">
              <div className="w-full">
                <img className="w-full" src={skillsCard.image} alt="" />
              </div>
              <div className="flex flex-col gap-4 w-11/12 h-auto">
                <h1 className="text-3xl px-4">{skillsCard.title}</h1>
                <ul className="text-2xl">
                  {skillsCard.content.map((skills) => {
                    return (
                      <div className="border-t-2 border-red-700">
                        <li className="p-3">{skills}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsSection;
