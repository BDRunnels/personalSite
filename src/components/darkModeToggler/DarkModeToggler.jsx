import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkModeToggler = () => {
    // const [darkMode, setDarkMode] = useState(false);
    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    //     console.log(darkMode);
    // };

    // useEffect(() => {
    //     console.log("Dark mode toggled", darkMode);
    //     document.body.classList.toggle('dark', darkMode);
    // }, [darkMode]);

    const [darkMode, setDarkMode] = useState(() => {
        // Retrieve dark mode preference from localStorage (if available)
        return localStorage.getItem('darkMode') === 'true';
    });

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode); // Save to localStorage
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
                className=" z-10 top-0 fixed left-[14rem] w-10 cursor-pointer rounded-lg p-2"
                />
        </>
    );
};
 
export default DarkModeToggler;