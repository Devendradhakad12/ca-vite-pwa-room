import { useState } from "react";

function FourPerson() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [e, setE] = useState("");
  const [f, setF] = useState("");

  const [ca, setCA] = useState(0);
  const [cb, setCB] = useState(0);
  const [cc, setCC] = useState(0);
  const [cd, setCD] = useState(0);
  const [ce, setCE] = useState(0);
  const [cf, setCF] = useState(0);

  const [perPerson, setPerPerson] = useState(0);
  const [toTotal, setToTotal] = useState(0);

  const [view, setView] = useState(false);

  const caFunc = (e) => {
    e.preventDefault();
    const to = Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(f);
    const per = to / 6;
    setPerPerson(per);
    setToTotal(to);
    setCA(per - Number(a));
    setCB(per - Number(b));
    setCC(per - Number(c));
    setCD(per - Number(d));
    setCE(per - Number(e));
    setCF(per - Number(f));
    setView(true);
  };

    console.log({ a, b, c, d });
  console.log({ ca, cb, cc, cd });

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col gap-5 pt-[4%] pb-[2%]  items-center">
      <h2 className="text-[30px] font-thin">Calculate</h2>
      <div className="flex flex-col gap-3">
        <form className="flex flex-col gap-3" onSubmit={caFunc}>
          <input
            type="number"
            placeholder="Devendra Dhakad"
            className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />

          <input
            type="number"
            placeholder="Ajay Dhakad"
            className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />

          <input
            type="number"
            placeholder="Sandip Dhakad"
            className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
            value={c}
            onChange={(e) => setC(e.target.value)}
          />

            <input
              type="number"
              placeholder="Umma Dhakad"
              className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
              value={d}
              onChange={(e) => setD(e.target.value)}
            />
            <input
              type="number"
              placeholder="Abhisekh Dhakad"
              className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
              value={e}
              onChange={(e) => setE(e.target.value)}
            />
            <input
              type="number"
              placeholder="Hemant Dhakad"
              className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
              value={f}
              onChange={(e) => setF(e.target.value)}
            />



          <button className="btn btn-primary text-xl">Calculate</button>
        </form>
      </div>

      {view ? (
        <>
          <div>
            <div className="card sm:w-96 w-[100%] bg-base-100 shadow-xl">
              <div className="card-body bg-slate-800 text-white rounded-xl">
                <p className="text-center">
                  {ca < 0 ? (
                    <>{`Devendra Dhakad ko lene he ₹${ca * -1}`}</>
                  ) : (
                    <>{`Devendra Dhakad ko dene he ₹${ca}`}</>
                  )}
                  <br />
                  {cb < 0
                    ? `Ajay Dhakad ko lene he ₹${cb * -1}`
                    : `Ajay Dhakad ko dene he ₹${cb}`}
                  <br />
                  {cc < 0
                    ? `Sandip Dhakad ko lene he ₹${cc * -1}`
                    : `Sandip Dhakad ko dene he ₹${cc}`}
                  <br />
                  {cd < 0
                    ? `Umma Dhakad ko lene he ₹${cd * -1}`
                    : `Umma Dhakad ko dene he ₹${cd}`}
                  <br />
                  {ce < 0
                    ? `Abhisekh Dhakad ko lene he ₹${ce * -1}`
                    : `Abhisekh Dhakad ko dene he ₹${ce}`}
                  <br />
                  {cf < 0
                    ? `Hemant Dhakad ko lene he ₹${cf * -1}`
                    : `Hemant Dhakad ko dene he ₹${cf}`}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card sm:w-96 w-[100%] bg-base-100 shadow-xl">
              <div className="card-body bg-slate-800 text-white rounded-xl">
                <p className="text-center">Total = {toTotal}</p>
                <p className="text-center">Per Person = {perPerson}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default FourPerson;
