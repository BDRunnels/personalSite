import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkModeToggler = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        console.log(darkMode);
    };

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);
    

    return (
        <>
            <DarkModeSwitch
                onClick={toggleDarkMode} 
                size={60}
                checked={darkMode}
                className=" z-10 fixed left-[14rem] w-10 cursor-pointer rounded-lg p-2"
                />
                {/* <span className="dark:hidden"> O </span>
                <span className="hidden dark:inline"> X </span> */}
        
        </>
    );
};
 
export default DarkModeToggler;