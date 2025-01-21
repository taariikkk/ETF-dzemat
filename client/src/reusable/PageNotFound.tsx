import { useNavigate } from "react-router";
import Dugme from "./Dugme";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-3xl mb-8">
        404
        <br />
        stranica
        <br />
        ne postoji
      </p>
      <Dugme text="Nazad" onClick={() => navigate(-1)} />
    </div>
  );
};

export default PageNotFound;
