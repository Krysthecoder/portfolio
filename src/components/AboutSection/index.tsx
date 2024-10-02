function AboutSection() {
  return (
    <div className="bg-red-50 w-full flex justify-center py-12" id="about">
      <div className="flex flex-col w-9/12 pl-8 py-4 gap-4 border-x-4 border-x-red-700">
        <div>
          <h1 className="text-3xl">Who I am:</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">What I love:</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>
        </div>
        <div>
          <h1 className="text-3xl">What I am working on:</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
