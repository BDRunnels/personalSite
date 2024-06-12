import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Carousel,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import ttt from "../../assets/TTT.png";
import missionControlImage from "../../assets/MissionControl.jpeg";
import gutterballsImage from "../../assets/Gutterballs.jpeg";
import aswImage from "../../assets/StarWars.jpg";
import hwImage from "../../assets/Handwork.jpg";

const ProjectCard = () => {
    // Project Object
    const projects = [
        {
        title: "Vanilla JavaScript Tic-Tac-Toe",
        description: "Basic Tic-Tac-Toe game learning the foundations of web development.",
        frameworks: "HTML | CSS | JavaScript",
        gitHub: "https://github.com/BDRunnels/Arcade_Project",
        url: "https://vanilla-ttt-game.netlify.app",
        picture: ttt
        },
        {
        title: "Mission Control",
        description: "Fake NASA app that `launches` a rocket to a habitable planet, defined by the Kepler Space Telescope.",
        frameworks: "MERN Stack | Docker | AWS EC2 Instance",
        gitHub: "https://github.com/BDRunnels/NASA-Mission-Control",
        url: "http://34.219.127.62:8000",
        picture: missionControlImage
        },
        {
        title: "Gutterballs",
        description: "E-commerce app selling bowling products. Designed for desktop / laptop use.",
        frameworks: "Custom CSS | React | Express | postgreSQL",
        gitHub: "https://github.com/GutterBalls",
        url: "https://gutterballs.netlify.app",
        picture: gutterballsImage
        },
        {
        title: "All Star Wars All The Time",
        description: "Responsive encylopedia leveraging SWAPI.",
        frameworks: "MDBootstrap | React",
        gitHub: "https://github.com/BDRunnels/StarWars_API",
        url: "https://asw-att.netlify.app",
        picture: aswImage
        },
        {
        title: "Handwork Clothing",
        description: "E-commerce app selling clothing products.",
        frameworks: "React | Firebase",
        gitHub: "https://github.com/BDRunnels/Clothing-Store",
        url: "https://handwork-clothing.netlify.app",
        picture: hwImage
        },
    ];

  return (
    <div className="min-h-screen md:min-h-fit">
      {projects
        ? projects.map((project, idx) => {
            return (
                    <div className="flex items-center justify-center md:hidden" key={idx}>
                        <Card className="mt-14 w-96 bg-[#659DBD] text-black dark:text-white dark:shadow-[#FEEEC1] dark:drop-shadow-2xl">
                            <CardHeader color="blue-gray" floated shadow className="relative h-56 dark:shadow-[#FEEEC1] dark:shadow-sm bg-transparent">
                                <img
                                    src={project.picture}
                                    alt="card-image"
                                    className="h-96 w-96 object-cover object-center"
                                />
                            </CardHeader>
                            <CardBody id={`${idx}`}>
                                <Typography variant="h5" color="blue-gray" className="mb-2 text-center underline">
                                {project.title}
                                </Typography>
                                <Typography className="text-center font-bold mb-2">
                                {project.description}
                                </Typography>
                                <Typography className="text-center">
                                 {project.frameworks}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <a href={project.gitHub} target="_blank" className="inline-block">
                                    <Button variant="text" className="flex items-center gap-2">
                                    GitHub Code
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        className="h-4 w-4"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                    </Button>
                                </a>
                                <a href={project.url} target="_blank" className="">
                                    <Button variant="text" className="flex items-center gap-2">
                                    Visit Site
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        className="h-4 w-4"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                    </Button>
                                </a>
                            </CardFooter>
                        </Card>
                    </div>    
            );
          })
        : "Loading..."}
            <div className="justify-center hidden md:flex mt-[10rem]">
                
                <Carousel autoplayDelay={10000} autoplay loop transition={{ type: "tween", duration: 2 }} className="rounded-xl md:w-[50vw] lg:w-[45vw] self-center border-2">
                    {projects ? projects.map((project, idx) => {
                        return (
                            <div className="relative h-full w-full" key={idx}>
                                <img
                                src={project.picture}
                                alt="image 1"
                                className="h-96 w-full object-cover"
                                />
                                
                                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                                    <div className="w-full text-center md:w-2/4">
                                        <h2 className="text-white mb-4"> {project.frameworks}</h2>
                                        <Typography
                                        variant="h1"
                                        color="white"
                                        className="mb-4 md:text-2xl md:font-extrabold"
                                        >
                                        {project.title}
                                        </Typography>
                                        <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-6"
                                        >
                                        {project.description}
                                        </Typography>
                                        <div className="flex justify-center gap-2">
                                            <Button size="sm" color="white" variant="outlined" className="hover:bg-white hover:text-black">
                                                <a href={project.gitHub}>GitHub </a>
                                            </Button>
                                            <Button size="sm" color="white" variant="outlined" className="hover:bg-white hover:text-black">
                                                <a href={project.url}>Site</a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : ""
                    }
                </Carousel>
            </div>
            <div>
                <section className="text-center mt-[10rem]">
                    Java Projects - Under Construction!
                </section>
                <section className="text-center mt-[10rem]">
                    Python Projects - Under Construction!
                </section>
            </div>
    </div>
  );
};

export default ProjectCard;
