import { utilsData } from '../../utils/utilsData';

function SkillsSection() {
  return (
    <div className="flex flex-col gap-20 items-center w-full h-auto py-32 bg-slate-100">
      <div className=" flex items-start justify-evenly gap-4 w-auto">
        {utilsData.skillsContent.map((skillsCard) => {
          return (
            <div className="flex flex-col gap-6 items-center common-card">
              <div className="w-full">
                <img
                  className="w-full rounded-md"
                  src={skillsCard.image}
                  alt=""
                />
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

      <div className="flex flex-col items-center gap-20 w-full">
        <div>
          <h1 className="text-4xl">Certifications:</h1>
        </div>

        <div className="flex flex-col gap-4 w-1/6">
          <div className="full">
            <img
              src="https://res.cloudinary.com/dhkjclfht/image/upload/c_scale,w_auto/q_auto/f_webp,fl_awebp/v1727813764/cld-sample-5"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl">Scrum Foundations</h1>
            <a href="#" className="text-lg">
              View Badge Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
