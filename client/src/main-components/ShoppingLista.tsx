import NaslovStranice from "../reusable/NaslovStranice";
import { useState } from "react";
import { FaShoppingCart, FaPlus } from "react-icons/fa";
import Podloga from "../reusable/Podloga";

const ShoppingLista = () => {
  const [items, setItems] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleCheck = (item: string) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((i) => i !== item));
      setItems([...items, item]);
    } else {
      setCheckedItems([...checkedItems, item]);
      setItems(items.filter((i) => i !== item));
    }
  };

  return (
    <>
      <NaslovStranice naslovStranice={"Shopping lista"} />
      <Podloga>
        <div className="bg-white p-4 rounded shadow-md w-[339px] h-[297px] mx-auto">
          <div className="flex items-center text-lg font-semibold mb-2">
            <FaShoppingCart className="mr-2" /> Korpa
          </div>
          <ul>
            {items.map((item) => (
              <li key={item} className="flex items-center space-x-2">
                <input type="checkbox" onChange={() => handleCheck(item)} className="accent-blue-500" />
                <span className="text-black">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center mt-2">
            <button onClick={handleAddItem} className="text-blue-500 mr-2">
              <FaPlus />
            </button>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="border p-1 rounded w-full"
              placeholder="Dodaj stavku"
            />
          </div>
        </div>
        {checkedItems.length > 0 && (
          <div className="bg-white p-4 rounded shadow-md mt-4 w-[339px] h-[297px] mx-auto">
            <div className="font-semibold mb-2">{checkedItems.length} označene stavke</div>
            <ul>
              {checkedItems.map((item) => (
                <li key={item} className="flex items-center space-x-2 line-through text-gray-500">
                  <input type="checkbox" checked onChange={() => handleCheck(item)} className="accent-blue-500" />
                  <span className="ml-2">{item}</span>
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
