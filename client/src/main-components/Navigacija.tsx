import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { LuCreditCard } from "react-icons/lu";
import { useState } from "react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router";

type IkonaNavigacijeType = {
  id: number;
  Ikona: IconType;
  link: string;
};

const bojaAktivne = "rgb(50, 125, 220)";

const ikone = [
  { id: 1, Ikona: IoHomeOutline, link: "/početna" },
  { id: 2, Ikona: HiOutlineBookOpen, link: "/uputstva" },
  { id: 3, Ikona: FiShoppingCart, link: "/shopping-lista" },
  { id: 4, Ikona: LuCreditCard, link: "/donacija" },
];

const Navigacija = () => {
  const [aktivnaIkona, setAktivnaIkona] = useState(1);

  const navigate = useNavigate();

  const IkonaNavigacije: React.FC<IkonaNavigacijeType> = ({ id, Ikona, link }) => {
    return (
      <div
        className="w-16"
        onClick={() => {
          setAktivnaIkona(id);
          navigate(link);
        }}
      >
        <Ikona color={aktivnaIkona === id ? bojaAktivne : "white"} className="mx-auto cursor-pointer" />
      </div>
    );
  };

  return (
    <div className="max-w-xs bg-black rounded-3xl flex py-2 px-1 justify-evenly mx-auto fixed bottom-4 left-2/4 -translate-x-2/4">
      {ikone.map(({ id, Ikona, link }) => (
        <IkonaNavigacije key={id} id={id} Ikona={Ikona} link={link} />
      ))}
    </div>
  );
};

export default Navigacija;
