import { useState } from "react";
import { 
    Accordion,
    AccordionBody,
    AccordionHeader,
    Avatar,
    Card, 
    CardHeader, 
    CardBody, 
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    List,
    ListItem,
    ListItemSuffix,
    IconButton,
    Chip,
    Tooltip, 
} from "@material-tailwind/react";

import mountainImage from "../../assets/Summer-Dream.webp";
import meImage from "../../assets/Me.png";
import mountainBgWhite from "../../assets/mountainOutlineWhite.png";
import mountainBg from "../../assets/mountainOutline.png";



const Home = () => {
    const [open1, setOpen1] = useState(0);
    const [open2, setOpen2] = useState(0);
    const [open3, setOpen3] = useState(0);
    const [open4, setOpen4] = useState(0);
    const [open5, setOpen5] = useState(0);
 
    const handleOpen1 = (value) => setOpen1(open1 === value ? 0 : value);
    const handleOpen2 = (value) => setOpen2(open2 === value ? 0 : value);
    const handleOpen3 = (value) => setOpen3(open3 === value ? 0 : value);
    const handleOpen4 = (value) => setOpen4(open4 === value ? 0 : value);
    const handleOpen5 = (value) => setOpen5(open5 === value ? 0 : value);

  return (
    <>
        <div 
            className=" flex flex-col items-center justify-center bg-cover bg-center bg-fixed h-[75vh]"
            style={{backgroundImage: `url(${mountainImage})`}}
            
        >
            <Card
                shadow={true}
                className="h-[40vh] mb-20 md:mb-0 md:h-[55vh] md:w-[20vw] md:min-w-fit justify-center overflow-hidden text-center dark:shadow-amber-800 shadow-md shadow-white"
                >
                <CardHeader
                    floated={false}
                    shadow={true}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center  bg-fixed"
                    style={{ backgroundImage: `url(${mountainImage})`}}
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                    variant="h2"
                    color="white"
                    className="mb-5 font-bold leading-[2.0] md:leading-[1.0]"
                    >
                        <div className="mb-2">DEVELOPER</div>
                        <div className="text-xl">JavaScript - Java</div>
                        <div className="text-xl">React - Express - node </div>
                    </Typography>
                    <Menu>
                        <MenuHandler>
                            <Avatar
                                size="xxl"
                                variant="circular"
                                alt="bryan picture"
                                className="cursor-pointer hover:cursor-zoom-in"
                                src={meImage}
                                />
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>
                                <Typography variant="small" className="font-bold text-center">
                                    <a href="mailto:bryan.d.runnels@gmail.com">e: bryan.d.runnels@gmail.com</a>
                                </Typography>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </CardBody>
            </Card>
        </div> 
        
        <div className="relative border-t-2 border-white dark:border-black">
            <div 
                className=" hidden dark:bg-fixed dark:bg-no-repeat dark:bg-contain dark:absolute dark:opacity-50  dark:w-[34%] dark:h-[100%] z-0 dark:md:block"
                style={{backgroundImage: `url(${mountainBgWhite})`}}

            />

            <div 
                className=" hidden md:block dark:hidden bg-fixed bg-no-repeat opacity-30 bg-left bg-contain absolute w-[34%] h-[100%] z-0 "
                style={{backgroundImage: `url(${mountainBg})`}}

            />
            
            <div className=" block md:flex md:flex-col md:flex-wrap md:items-between md:items-center">
                <Accordion open={open1 === 1} className="p-2 lg:w-1/3 md:w-1/2">
                    <AccordionHeader onClick={() => handleOpen1(1)} className="justify-center border-2 border-white bg-[#BC986A] dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-2 dark:hover:border-black rounded-lg text-black hover:text-white">
                        Who am I?
                    </AccordionHeader>
                    <AccordionBody className=" text-black font-extrabold bg-[#9AC4E4] dark:bg-amber-800 transition-colors rounded-lg border border-white">
                        <p className="indent-5 p-5"> I am a recent graduate of Colorado State University's Professional Education Bootcamp through Full Stack Academy. This full-time, immersive coding program instilled in me a passion for coding and a burning desire to learn.</p>
                        <p className="indent-5 p-5">Post graduation, I have delved deep into these frameworks through advanced courses on Udemy to further my knowledge and built several projects. In addition, I began learning Java to capture OOP concepts. </p>
                    </AccordionBody>
                </Accordion>

                <Accordion open={open1 === 2} className="p-2 lg:w-1/3 md:w-1/2">
                    <AccordionHeader onClick={() => handleOpen1(2)} className="justify-center border-2 border-white bg-[#BC986A] dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-2 dark:hover:border-black rounded-lg text-black hover:text-white">
                        What do I know?
                    </AccordionHeader>
                    <AccordionBody className=" text-center text-black font-extrabold bg-[#9AC4E4] dark:bg-amber-800 transition-colors rounded-lg border border-white">
                        <List>
                            <ListItem selected className="font-bold text-black dark:bg-white dark:hover:!bg-white hover:!bg-white/40 cursor-auto">
                                Core Web - HTML / CSS
                                <ListItemSuffix>
                                    {/* <Tooltip content="I feel good about this!"> */}
                                        <Chip color="green" value="Proficient" className="cursor-pointer"/>
                                    {/* </Tooltip> */}
                                </ListItemSuffix>
                            </ListItem>
                            <ListItem selected className="font-bold text-black dark:bg-white dark:hover:!bg-white hover:!bg-white/40 cursor-auto">
                                JavaScript / React
                                <ListItemSuffix>
                                    {/* <Tooltip content="Feeling good about this!"> */}
                                        <Chip color="green" value="Proficient" className="cursor-pointer"/>
                                    {/* </Tooltip> */}
                                </ListItemSuffix>
                            </ListItem>
                            <ListItem selected className="font-bold text-black dark:bg-white dark:hover:!bg-white hover:!bg-white/40 cursor-auto">
                                Java
                                <ListItemSuffix>
                                    {/* <Tooltip content="Still learning!"> */}
                                        <Chip color="light-blue" value="Learning" className="cursor-pointer"/>
                                    {/* </Tooltip>     */}
                                </ListItemSuffix>
                            </ListItem>
                            <ListItem selected className="font-bold text-black dark:bg-white dark:hover:!bg-white hover:!bg-white/40 cursor-auto">
                                Express
                                <ListItemSuffix>
                                    {/* <Tooltip content="Ehhh"> */}
                                        <Chip color="orange" value="Knowledgable" className="cursor-pointer"/>
                                    {/* </Tooltip> */}
                                        
                                </ListItemSuffix>
                            </ListItem>
                            <ListItem selected className="font-bold text-black dark:bg-white dark:hover:!bg-white hover:!bg-white/40 cursor-auto">
                                node
                                <ListItemSuffix>
                                    <Chip color="orange" value="Knowledgable" className="cursor-pointer"/>
                                </ListItemSuffix>
                            </ListItem>
                            <ListItem selected className="font-bold text-black dark:bg-white dark:hover:!bg-white hover:!bg-white/40 cursor-auto">
                                RDBMS - PostgreSQL / SQL
                                <ListItemSuffix>
                                    <Chip color="orange" value="Knowledgable" className="cursor-pointer"/>
                                </ListItemSuffix>
                            </ListItem>
                            <ListItem selected className="font-bold text-black dark:bg-white dark:hover:!bg-white hover:!bg-white/40 cursor-auto">
                                NoSQL - MongoDB / Firebase / GraphQL
                                <ListItemSuffix>
                                    <Chip color="orange" value="Knowledgable" className="cursor-pointer"/>
                                </ListItemSuffix>
                            </ListItem>
                            <ListItem selected className="font-bold text-black dark:bg-white dark:hover:!bg-white hover:!bg-white/40 cursor-auto">
                                Custom CSS - Bootstrap / Tailwind
                                <ListItemSuffix>
                                    {/* <Tooltip content="I feel good about this!"> */}
                                        <Chip color="green" value="Proficient" className="cursor-pointer"/>
                                    {/* </Tooltip> */}
                                </ListItemSuffix>
                            </ListItem>
                            <ListItem selected className="font-bold text-black dark:bg-white dark:hover:!bg-white hover:!bg-white/40 cursor-auto">
                                git / GitHub
                                <ListItemSuffix>
                                    {/* <Tooltip content="I feel good about this!"> */}
                                        <Chip color="green" value="Proficient" className="cursor-pointer"/>
                                    {/* </Tooltip> */}
                                </ListItemSuffix>
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open1 === 3} className="p-2 lg:w-1/3 md:w-1/2">
                    <AccordionHeader onClick={() => handleOpen1(3)} className="justify-center border-2 border-white bg-[#BC986A] dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-2 dark:hover:border-black rounded-lg text-black hover:text-white">
                        What is my education?
                    </AccordionHeader>
                    <AccordionBody className="text-black font-extrabold bg-[#9AC4E4] dark:bg-amber-800 transition-colors rounded-lg border border-white">
                        <p className="indent-5 p-5">
                            I am a graduate of the University of Kansas - B.A. in Communication and Minor in French, in addition to the Colorado State University bootcamp program. For the past 15 years, my professional experience dealt with operations management for a major shipping company, a wine and spirits distributor, and a property management firm.
                        </p>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open1 === 4} className="p-2 lg:w-1/3 md:w-1/2">
                    <AccordionHeader onClick={() => handleOpen1(4)} className="justify-center border-2 border-white bg-[#BC986A] dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-2 dark:hover:border-black rounded-lg text-black hover:text-white">
                        What do I enjoy?
                    </AccordionHeader>
                    <AccordionBody className="text-center text-black font-extrabold bg-[#9AC4E4] dark:bg-amber-800 transition-colors rounded-lg border border-white">
                        Besides coding and learning as much as possible, I enjoy...
                        <ul className="p-5 grid text-left justify-center">
                            <li> Competitive Bowling</li>
                            <li> Bass Guitar </li>
                            <li> Weight Training</li>
                            <li> Hiking</li>
                            <li> Disc Golf</li>
                            <li> Family</li>
                        </ul>
                    </AccordionBody>
                </Accordion>
                {/* <Accordion open={open5 === 5} className="p-2 lg:w-1/3 md:w-1/2">
                    <AccordionHeader onClick={() => handleOpen5(5)} className="justify-center border-2 border-white bg-[#BC986A] dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-2 dark:hover:border-black rounded-lg text-black hover:text-white">
                        What are my goals?
                    </AccordionHeader>
                    <AccordionBody className="text-center text-black font-extrabold bg-[#9AC4E4] dark:bg-amber-800 transition-colors rounded-lg border border-white">
                        <p>
                            To become better every day. Realistically, my goal is to be a part of an organization that mentors
                        </p>
                    </AccordionBody>
                </Accordion> */}
            </div>
        </div>
    </>
    );
};

export default Home;
