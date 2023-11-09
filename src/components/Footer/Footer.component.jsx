import { Typography, IconButton } from "@material-tailwind/react";

// Icon Import
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="h-20">
      <footer className=" dark:!rounded-b-none fixed h-[5%] bottom-0 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-2 border-white text-center md:justify-around z-10 dark:bg-black dark:border-none bg-[#9AC4E4] dark:text-white rounded-md">
        {/* <Typography className="font-bold">
              &copy;Bryan Runnels
        </Typography> */}
        <ul className="flex gap-x-2 justify-center w-2/4 float-right">
          <li>
              <IconButton size="sm" className="rounded bg-[#333333] dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white hover:bg-transparent hover:text-black">
                <a href="https://github.com/BDRunnels"><FaGithub  className="text-2xl"/></a>
              </IconButton>
          </li>
          <li>
              <IconButton size="sm" className="rounded bg-[#333333] dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white hover:bg-transparent hover:text-black">
                <a href="https://www.linkedin.com/in/bryanrunnels/"><FaLinkedin  className="text-2xl"/></a>
              </IconButton>
            
          </li>
          <li>
              <IconButton size="sm" className="rounded bg-[#333333] dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white hover:bg-transparent hover:text-black">
                <a href="mailto:bryan.d.runnels@gmail.com"><CgMail  className="text-2xl"/></a>
              </IconButton>
          </li>
        </ul>
      </footer>
    </div>  
  );
};

export default Footer;
