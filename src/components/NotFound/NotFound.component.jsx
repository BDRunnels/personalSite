import { useEffect } from "react";

const NotFound = () => {

    useEffect(() => {
        document.body.classList.contains("dark") ? document.body.classList.add("dark") : null    
    }, []);

    return(
        <div className=" bg-gradient-to-r md:max-w-[100vw] max-w-[75vw] md:rounded-3xl 
        rounded-r-3xl dark:from-red-600 dark:to-yellow-600 from-cyan-700 to-teal-100 
        text-bold text-white dark:text-black text-3xl font-extrabold flex justify-center 
        items-center h-[10vh] mt-20"> 
            404 - Page Not Found / Page Under Construction
        </div>
    );
};

export default NotFound;