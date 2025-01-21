import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { LuCreditCard } from "react-icons/lu";
import { useState } from "react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router";

type IkonaNavigacijeType = {
  id: number;
  link: string;
  Ikona: IconType;
};

const bojaAktivne = "rgb(50, 125, 220)";

const ikone = [
  { id: 1, link: "/početna", Ikona: IoHomeOutline },
  { id: 2, link: "/uputstva", Ikona: HiOutlineBookOpen },
  { id: 3, link: "/shopping-lista", Ikona: FiShoppingCart },
  { id: 4, link: "/donacija", Ikona: LuCreditCard },
];

const Navigacija = () => {
  const [aktivnaIkona, setAktivnaIkona] = useState(ikone.find((ikona) => ikona.link === location.pathname)?.id || 1);

  const navigate = useNavigate();

  const IkonaNavigacije: React.FC<IkonaNavigacijeType> = ({ id, link, Ikona }) => {
    return (
      <div
        className="w-16"
        onClick={() => {
          setAktivnaIkona(id);
          navigate(link);
        }}
      >
        <Ikona color={aktivnaIkona === id ? bojaAktivne : "white"} className="mx-auto cursor-pointer text-3xl" />
      </div>
    );
  };

  return (
    <div className="max-w-xs bg-black rounded-3xl flex py-2 px-1 justify-evenly mx-auto fixed bottom-4 left-2/4 -translate-x-2/4">
      {ikone.map(({ id, link, Ikona }) => (
        <IkonaNavigacije key={id} id={id} link={link} Ikona={Ikona} />
      ))}
    </div>
  );
};

export default Navigacija;
