import NaslovStranice from "../reusable/NaslovStranice";
import { useState } from "react";
import { FaShoppingCart, FaPlus, FaTrashAlt } from "react-icons/fa";
import Podloga from "../reusable/Podloga";
import Input from "../reusable/Input";

const ShoppingLista = () => {
  const [items, setItems] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems((s) => [...s, newItem]);
      setNewItem("");
    }
  };

  const handleCheck = (item: string) => {
    if (checkedItems.includes(item)) {
      setCheckedItems((s) => s.filter((it) => it !== item));
      setItems((s) => [...s, item]);
    } else {
      setCheckedItems((s) => [...s, item]);
      setItems((s) => s.filter((it) => it !== item));
    }
  };

  const handleDeleteItem = (itemID: number) => {
    setCheckedItems((s) => s.filter((_, i) => i !== itemID));
  };

  return (
    <>
      <NaslovStranice naslovStranice={"Shopping lista"} />
      <Podloga>
        <div className="bg-white p-4 rounded shadow-md min-h-48 mx-auto">
          <h2 className="flex font-semibold items-center text-xl mb-3">
            <FaShoppingCart className="mr-2" size={22} /> Korpa
          </h2>
          <ul>
            {items.map((item, i) => (
              <li key={i} className="flex items-center space-x-2">
                <input checked={false} type="checkbox" onChange={() => handleCheck(item)} className="accent-blue-500" />
                <span className="text-black">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center mt-2">
            <button onClick={handleAddItem} className="text-blue-500 mr-2">
              <FaPlus />
            </button>
            <Input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="border px-1 py-0 my-1"
              placeholder="Dodaj stavku"
            />
          </div>
        </div>
        {checkedItems.length > 0 && (
          <div className="bg-white p-4 rounded shadow-md mt-4 min-h-48">
            <h2 className="font-semibold text-left text-xl mb-2">Kupljene stavke ({checkedItems.length}):</h2>
            <ul>
              {checkedItems.map((item, i) => (
                <li key={i} className="flex items-center text-gray-500">
                  <input type="checkbox" checked onChange={() => handleCheck(item)} className="accent-blue-500" />
                  <span className="ml-2 line-through">{item}</span>
                  <div className="ml-auto">
                    <FaTrashAlt className="cursor-pointer ml-auto" size={17} onClick={() => handleDeleteItem(i)} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Podloga>
    </>
  );
};

export default ShoppingLista;
