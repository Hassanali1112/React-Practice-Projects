import ThemeContextProvider from './context/ThemeContextProvider'
import Card from './components/Card'
import {  useEffect, useState } from 'react';
import ThemeBtn from './components/ThemeBtn';

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () =>{
    setThemeMode("dark")
  }
    
  const lightTheme = () =>{
    setThemeMode("light")
  }
    
  useEffect(()=>{
    
    if(themeMode === "dark"){
    
      document.querySelector(".container-card").style.backgroundColor = "black";
      document.querySelector(".container-card").style.color = "white";

    } else{

      document.querySelector(".container-card").style.backgroundColor = "white";
      document.querySelector(".container-card").style.color = "black";
      
    }
  },[themeMode])


  return (
    <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="h-screen  w-full flex justify-center items-center">
        <div className="w-[40rem] border-1 rounded-[8px] border-gray-300 p-5 flex flex-col container-card">
          <div className="self-end">
            <ThemeBtn />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App
