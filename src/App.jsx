import { useState } from "react";
import "./App.css";
import ThreePerson from "./components/ThreePeroson";
import FourPerson from "./components/FourPerson";

function App() {
  const [person, setPerson] = useState(3);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col gap-5 pt-[6%] pb-[2%]  items-center">
      <h2>Select Person</h2>
      <select
        onChange={(e) => {
          setPerson(Number(e.target.value));
        }}
      >
        <option value={3}>3</option>
        <option value={4}></option>
      </select>
      {person === 3 ? <ThreePerson /> : <FourPerson />}
    </div>
  );
}

export default App;
