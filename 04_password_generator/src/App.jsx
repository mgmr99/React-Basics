import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const passwordRef = useRef(null);

  const handleGeneratePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+";

    if (includeNumbers) str = str + numbers;
    if (includeSymbols) str = str + symbols;

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
    // console.log(pass);
  }, [length, includeNumbers, includeSymbols, setPassword]);

  const copyTexttoClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  //setPassword as dependency for memoization
  // handleGeneratePassword();
  useEffect(() => {
    handleGeneratePassword();
  }, [length, includeNumbers, includeSymbols, handleGeneratePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Your Password"
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyTexttoClipboard}
            className="bg-blue-500 text-white px-3"
          >
            Copy
          </button>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={includeNumbers}
            onChange={() => {
              setIncludeNumbers((prev) => !prev);
            }}
          />
          <label htmlFor="">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={includeSymbols}
            onChange={() => {
              setIncludeSymbols((prev) => !prev);
            }}
          />
          <label htmlFor="">Symbols</label>
        </div>
      </div>
    </>
  );
}

export default App;
