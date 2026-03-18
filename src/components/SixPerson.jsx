import { useState } from "react";

function SixPerson() {
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

  const caFunc = (ev) => {
    ev.preventDefault();
    const to =
      Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(f);
    const per = to / 6;
    setPerPerson(per);
    setToTotal(to);
    setCA(per.toFixed(2) - Number(a).toFixed(2));
    setCB(per.toFixed(2) - Number(b).toFixed(2));
    setCC(per.toFixed(2) - Number(c).toFixed(2));
    setCD(per.toFixed(2) - Number(d).toFixed(2));
    setCE(per.toFixed(2) - Number(e).toFixed(2));
    setCF(per.toFixed(2) - Number(f).toFixed(2));
    setView(true);
  };

  /*   console.log({ a, b, c, d });
  console.log({ ca, cb, cc, cd }); */

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col gap-5 pt-[2%] pb-[2%]  items-center">
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
            placeholder="Anand Singh"
            className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />

          <input
            type="number"
            placeholder="P Gurjar"
            className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
            value={c}
            onChange={(e) => setC(e.target.value)}
          />

          <input
            type="number"
            placeholder="Hariom singh"
            className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
            value={d}
            onChange={(e) => setD(e.target.value)}
          />
          <input
            type="number"
            placeholder="Rajvardhn singh"
            className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
            value={e}
            onChange={(e) => setE(e.target.value)}
          />
          <input
            type="number"
            placeholder="Jayant Singh"
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
                    <>{`Devendra Dhakad ko lene he ₹${Number(ca * -1).toFixed(
                      2
                    )}`}</>
                  ) : (
                    <>{`Devendra Dhakad ko dene he ₹${ca.toFixed(2)}`}</>
                  )}
                  <br />
                  {cb < 0
                    ? `Anand Singh ko lene he ₹${Number(cb * -1).toFixed(2)}`
                    : `Anand Singh ko dene he ₹${cb.toFixed(2)}`}
                  <br />
                  {cc < 0
                    ? `P Gurjar ko lene he ₹${Number(cc * -1).toFixed(2)}`
                    : `P Gurjar ko dene he ₹${cc.toFixed(2)}`}
                  <br />
                  {cd < 0
                    ? `Hariom ko lene he ₹${Number(cd * -1).toFixed(2)}`
                    : `Hariom ko dene he ₹${cd.toFixed(2)}`}
                  <br />
                  {ce < 0
                    ? `Rajvardhn ko lene he ₹${Number(ce * -1).toFixed(2)}`
                    : `Rajvardhn ko dene he ₹${ce.toFixed(2)}`}
                  <br />
                  {cf < 0
                    ? `Jayant ko lene he ₹${Number(cf * -1).toFixed(2)}`
                    : `Jayant ko dene he ₹${cf.toFixed(2)}`}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card sm:w-96 w-[100%] bg-base-100 shadow-xl">
              <div className="card-body bg-slate-800 text-white rounded-xl">
                <p className="text-center">Total = {toTotal.toFixed(2)}</p>
                <p className="text-center">
                  Per Person = {perPerson.toFixed(2)}
                </p>
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

export default SixPerson;
