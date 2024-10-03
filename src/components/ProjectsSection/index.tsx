import { utilsData } from '../../utils/utilsData';

function ProjectsSection() {
  return (
    <div className="flex justify-center items-center w-full h-auto ">
      <div className="flex justify-around w-11/12 h-auto py-36">
        {utilsData.projectsContent.map((project) => {
          return (
            <div className="flex flex-col gap-6 common-card">
              <div className="w-10/12 mx-auto">
                <img src={project.image} className="w-full rounded-lg" alt="" />
              </div>

              <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl">{project.title}</h1>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((elem, inx) => {
                    return (
                      <li className="text-xl">
                        {inx === project.technologies.length - 1
                          ? (elem = elem + '.')
                          : (elem = elem + ',')}
                      </li>
                    );
                  })}
                </ul>
                <p className="text-xl">{project.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsSection;
