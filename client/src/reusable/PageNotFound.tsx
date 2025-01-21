import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Tražena stranica ne postoji</p>
      <button onClick={() => navigate(-1)}>Nazad</button>
    </div>
  );
};

export default PageNotFound;
