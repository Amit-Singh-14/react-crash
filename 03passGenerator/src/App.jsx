import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLenght] = useState(8);
  const [number, setNumber] = useState(false);
  const [special, setSpecial] = useState(false);

  const passwordRef = useRef(null);

  const generatePass = useCallback(() => {
    let char = "abcdefghijklmnopqrrstuvwxyz";
    const specialchar = "!@#$%^&*()";
    const num = "1234567890";

    if (special) char = char.concat(specialchar);
    if (number) char = char.concat(num);

    let newPass = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * char.length);
      newPass = newPass.concat(char.charAt(index));
    }
    setPassword(newPass);
  }, [password, length, number, special]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePass();
  }, [length, number, special]);

  return (
    <>
      <div className="bg-black h-screen text-white flex justify-center   text-center p-10 ">
        <div className="bg-gray-500 rounded-xl w-max p-1 h-fit pb-5">
          <h1 className="mb-5 text-2xl p-2"></h1>
          <div className="w-full">
            <input
              type="text"
              className="p-3 rounded-s-2xl text-black"
              ref={passwordRef}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className=" p-3 bg-black rounded-e-2xl" onClick={copyPasswordToClipBoard}>
              copy
            </button>
          </div>

          <div className="flex  justify-center gap-4 mt-10">
            <div className="flex">
              <input
                type="range"
                min="6"
                max="20"
                value={length}
                onChange={(e) => setLenght(e.target.value)}
              />
              <p>Length {length}</p>
            </div>

            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                value={number}
                onChange={() => setNumber((n) => !n)}
              />
              <p>Numbers</p>
            </div>

            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                value={special}
                onChange={() => setSpecial((s) => !s)}
              />
              <p>Character</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
