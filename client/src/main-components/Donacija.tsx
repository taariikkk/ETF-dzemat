import Dugme from "../reusable/Dugme";
import Input from "../reusable/Input";
import NaslovStranice from "../reusable/NaslovStranice";
import Podloga from "../reusable/Podloga";

const inputPolja = [
  { type: "text", placeholder: "Ime vlasnika kartice" },
  { type: "number", placeholder: "Broj kartice" },
  { type: "text", placeholder: "MM/YY isteka" },
  { type: "number", placeholder: "CVC" },
];

const Donacija = () => {
  return (
    <>
      <NaslovStranice naslovStranice="Donacija" />
      <Podloga>
        <h2 className="text-left text-xl mb-4 font-semibold">Vaši podaci</h2>
        <form>
          {inputPolja.map((props, i) => {
            return <Input key={i} {...props} />;
          })}
        </form>
        <h2 className="text-left text-xl mt-6 mb-4 font-semibold">Namjena donacije</h2>
        <textarea
          className="rounded-md px-2 my-2 w-full h-40 min-h-20 max-h-52 overflow-auto"
          placeholder="Uplaćujem u svrhu..."
        />
        <Dugme text="Uplati" />
      </Podloga>
    </>
  );
};

export default Donacija;
