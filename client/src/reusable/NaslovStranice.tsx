const NaslovStranice: React.FC<{ naslovStranice: string }> = ({ naslovStranice }) => {
  return <h1 className="text-4xl max-w-56 text-center cursor-default mx-auto mb-11">{naslovStranice}</h1>;
};

export default NaslovStranice;
