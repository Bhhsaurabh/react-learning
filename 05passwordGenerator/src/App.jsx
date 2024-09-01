import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const passwordRef = useRef(null);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 30);
    window.navigator.clipboard.writeText(password);

    // Trigger button animation
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Remove the class after 300ms
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "0123456789";
    if (isChar) str += "!@#$%^&*()?/|~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumber, isChar, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isChar, isNumber, passwordGenerator]);

  return (
    <>
      <div
        className="w-full max-w-lg mx-auto shadow-md rounded-lg 
      px-4 py-4 my-8 text-orange-500 bg-gray-800"
      >
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipBoard}
            className={`outline-none text-white px-3 py-0.5 shrink-0 rounded-sm ${
              isClicked
                ? "bg-blue-600 scale-95"
                : "bg-blue-400 hover:bg-blue-500 transition-all"
            }`}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />{" "}
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              onChange={() => {
                setIsNumber((prev) => !prev);
              }}
            />{" "}
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isChar}
              id="charInput"
              onChange={() => {
                setIsChar((prev) => !prev);
              }}
            />{" "}
            <label htmlFor="charInput">SpecialCharacter</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
