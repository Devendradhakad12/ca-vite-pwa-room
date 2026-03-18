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

  const caFunc = (es) => {
    es.preventDefault();
    console.log({ a, b, c, d,e,f });
    const to =
      Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(f);
    const per = to / 6;
    console.log({ to, per });
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

  console.log({ a, b, c, d,e,f });
  console.log({ ca, cb, cc, cd,ce,cf });

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
            onChange={(el) => setE(el.target.value)}
          />
          <input
            type="number"
            placeholder="Hemant Dhakad"
            className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
            value={f}
            onChange={(el) => setF(el.target.value)}
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
                    <>{`Devendra Dhakad ko lene he ₹${Number(ca * -1).toFixed(2)}`}</>
                  ) : (
                    <>{`Devendra Dhakad ko dene he ₹${Number(ca).toFixed(2)}`}</>
                  )}
                  <br />
                  {cb < 0
                    ? `Ajay Dhakad ko lene he ₹${Number(cb * -1).toFixed(2)}`
                    : `Ajay Dhakad ko dene he ₹${Number(cb).toFixed(2)}`}
                  <br />
                  {cc < 0
                    ? `Sandip Dhakad ko lene he ₹${Number(cc * -1).toFixed(2)}`
                    : `Sandip Dhakad ko dene he ₹${Number(cc).toFixed(2)}`}
                  <br />
                  {cd < 0
                    ? `Umma Dhakad ko lene he ₹${Number(cd * -1).toFixed(2)}`
                    : `Umma Dhakad ko dene he ₹${Number(cd).toFixed(2)}`}
                  <br />
                  {ce < 0
                    ? `Abhisekh Dhakad ko lene he ₹${Number(ce * -1).toFixed(2)}`
                    : `Abhisekh Dhakad ko dene he ₹${Number(ce).toFixed(2)}`}
                  <br />
                  {cf < 0
                    ? `Hemant Dhakad ko lene he ₹${Number(cf * -1).toFixed(2)}`
                    : `Hemant Dhakad ko dene he ₹${Number(cf).toFixed(2)}`}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card sm:w-96 w-[100%] bg-base-100 shadow-xl">
              <div className="card-body bg-slate-800 text-white rounded-xl">
                <p className="text-center">Total = {Number(toTotal).toFixed(2)}</p>
                <p className="text-center">Per Person = {Number(perPerson).toFixed(2)}</p>
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
