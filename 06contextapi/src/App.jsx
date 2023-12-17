import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./Context/Method2/Theme";
import { useEffect, useState } from "react";

function App() {
  const [themeData, setThemeData] = useState("light");

  const setdark = () => {
    setThemeData("dark");
  };
  const setlight = () => {
    setThemeData("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeData);
  }, [themeData]);

  return (
    <ThemeProvider value={{ themeData, setdark, setlight }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
