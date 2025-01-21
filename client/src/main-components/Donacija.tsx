import Dugme from "../reusable/Dugme";
import NaslovStranice from "../reusable/NaslovStranice";
import Podloga from "../reusable/Podloga";

const inputPolja = [
  { type: "text", placeholder: "Ime vlasnika kartice" },
  { type: "number", placeholder: "Broj kartice" },
  { type: "text", placeholder: "MM/YY" },
  { type: "number", placeholder: "000" },
];

const Donacija = () => {
  return (
    <>
      <NaslovStranice naslovStranice={"Donacija"} />
      <Podloga>
        <h2 className="text-left text-xl mb-4">Vaši podaci</h2>
        <form>
          {inputPolja.map(({ type, placeholder }, i) => {
            return <input key={i} className="rounded-md px-2 py-1 my-2 w-full" type={type} placeholder={placeholder} />;
          })}
        </form>
        <h2 className="text-left text-xl mt-6 mb-4">Namjena donacije</h2>
        <textarea className="rounded-md px-2 my-2 w-full h-40" placeholder="Uplaćujem u svrhu..." />
        <Dugme text={"Uplati"}></Dugme>
      </Podloga>
    </>
  );
};

export default Donacija;
