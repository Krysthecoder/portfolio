function SkillsSection() {
  return (
    <div className="h-screen w-full bg-slate-100">
      <div className=" flex items-start justify-evenly gap-4 w-auto pt-32">
        <div className="flex flex-col gap-4 items-center skills-card ">
          <div className="w-full">
            <img
              className="w-full"
              src="https://res.cloudinary.com/dhkjclfht/image/upload/c_scale,w_auto/q_auto/f_webp,fl_awebp/v1727813764/cld-sample-5"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 w-11/12 h-auto">
            <h1 className="text-3xl px-4"> Web Technologies: </h1>
            <ul className="text-2xl">
              <div className="border-t-2 border-red-700">
                <li className="p-3">Skill 1</li>
              </div>
              <div className="border-t-2 border-red-700">
                <li className="p-3">Skill 1</li>
              </div>
              <div className="border-t-2 border-red-700">
                <li className="p-3">Skill 1</li>
              </div>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center skills-card ">
          <div className="w-full">
            <img
              className="w-full"
              src="https://res.cloudinary.com/dhkjclfht/image/upload/c_scale,w_auto/q_auto/f_webp,fl_awebp/v1727813764/cld-sample-5"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 w-11/12 h-auto">
            <h1 className="text-3xl px-4"> Web Technologies: </h1>
            <ul className="text-2xl">
              <div className="border-t-2 border-red-700">
                <li className="p-3">HTML:5 & CCS3</li>
              </div>
              <div className="border-t-2 border-red-700">
                <li className="p-3">Skill 1</li>
              </div>
              <div className="border-t-2 border-red-700">
                <li className="p-3">Skill 1</li>
              </div>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center skills-card ">
          <div className="w-full">
            <img
              className="w-full"
              src="https://res.cloudinary.com/dhkjclfht/image/upload/c_scale,w_auto/q_auto/f_webp,fl_awebp/v1727813764/cld-sample-5"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 w-11/12 h-auto">
            <h1 className="text-3xl px-4"> Web Technologies: </h1>
            <ul className="text-2xl">
              <div className="border-t-2 border-red-700">
                <li className="p-3">Skill 1</li>
              </div>
              <div className="border-t-2 border-red-700">
                <li className="p-3">Skill 1</li>
              </div>
              <div className="border-t-2 border-red-700">
                <li className="p-3">Skill 1</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
