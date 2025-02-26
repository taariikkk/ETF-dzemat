import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { FaShoppingCart, FaPlus, FaTrashAlt } from "react-icons/fa";
import { shoppingListaStavke } from "../data/pocetniPodaci";
import NaslovStranice from "../reusable/NaslovStranice";
import Logout from "../reusable/Logout";
import Podloga from "../reusable/Podloga";
import Input from "../reusable/Input";

const ShoppingLista = () => {
  const [items, setItems] = useState(shoppingListaStavke);
  const [newItem, setNewItem] = useState("");
  const { userInfo } = useAppSelector((s) => s.etfszm);

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems((s) => [...s, { naziv: newItem.trim(), checked: false }]);
      setNewItem("");
    }
  };

  const handleCheck = (i: number) => {
    setItems((s) => s.map((item, index) => (i === index ? { ...item, checked: !item.checked } : item)));
  };

  const handleDeleteItem = (itemID: number) => {
    setItems((s) => s.filter((_, i) => i !== itemID));
  };

  return (
    <>
      <NaslovStranice naslovStranice={"Shopping lista"} />
      <Logout />
      <Podloga>
        <div className="bg-white p-4 rounded shadow-md min-h-48 mx-auto">
          <h2 className="flex font-semibold items-center text-xl mb-3">
            <FaShoppingCart className="mr-2" size={22} /> Korpa
          </h2>
          <ul className="mt-4">
            {items.map(
              (item, i) =>
                !item.checked && (
                  <li key={i} className="flex items-center space-x-2 mt-2">
                    <input
                      checked={item.checked}
                      type="checkbox"
                      onChange={() => handleCheck(i)}
                      className="w-3.5 h-3.5 accent-blue-500 cursor-pointer"
                    />
                    <span className="text-black">{item.naziv}</span>
                  </li>
                )
            )}
          </ul>
          <div className="flex items-center mt-2">
            <Input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="border py-2"
              placeholder="Dodaj stavku"
            />
            <button onClick={handleAddItem} className="text-blue-500 ml-2">
              <FaPlus />
            </button>
          </div>
        </div>
        {items.some((item) => item.checked) && (
          <div className="bg-white p-4 rounded shadow-md mt-4 min-h-48">
            <h2 className="font-semibold text-left text-xl mb-2">
              Kupljene stavke ({items.filter((item) => item.checked).length}):
            </h2>
            <ul className="mt-4">
              {items.map(
                (item, i) =>
                  item.checked && (
                    <li key={i} className="flex items-center text-gray-500 mt-2">
                      <input
                        type="checkbox"
                        checked
                        onChange={() => handleCheck(i)}
                        className="w-3.5 h-3.5 accent-blue-500 cursor-pointer"
                      />
                      <span className="ml-2 line-through">{item.naziv}</span>
                      {userInfo.role === "admin" && (
                        <div className="ml-auto">
                          <FaTrashAlt
                            className="cursor-pointer ml-auto"
                            size={17}
                            onClick={() => handleDeleteItem(i)}
                          />
                        </div>
                      )}
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </Podloga>
    </>
  );
};

export default ShoppingLista;
