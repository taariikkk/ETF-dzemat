const NaslovStranice: React.FC<{ naslovStranice: string }> = ({ naslovStranice }) => {
  return <h1 className="max-w-40 text-center cursor-default mx-auto">{naslovStranice}</h1>;
};

export default NaslovStranice;
