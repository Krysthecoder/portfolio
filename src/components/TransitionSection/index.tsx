interface TransitionSection {
  title: string;
}

function TransitionSection({ title }: TransitionSection) {
  return (
    <div className="w-full flex items-center justify-center bg-img-1 parallax-section">
      <div className="w-2/12 h-auto py-1 bg-black outline outline-2 outline-offset-2">
        <h1 className="text-white text-center text-4xl">{title}</h1>
      </div>
    </div>
  );
}

export default TransitionSection;
