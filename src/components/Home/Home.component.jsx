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
} from "@material-tailwind/react";

import mountainImage from "../../assets/Summer-Dream.jpg";
import meImage from "../../assets/Me.jpg";
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
            className=" flex flex-col items-center justify-center h-[calc(100vh-200px)] min-h-[200px] bg-cover bg-center bg-fixed"
            style={{backgroundImage: `url(${mountainImage})`}}
            
        >
            <Card
                shadow={true}
                className="h-[40rem] w-[90vw] max-w-[28rem] justify-center overflow-hidden text-center dark:shadow-amber-800 shadow-md shadow-white"
                >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${mountainImage})`}}
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                    variant="h2"
                    color="white"
                    className="mb-6 font-bold leading-[1.5]"
                    >
                        <div>DEVELOPER</div>
                        <div>STUFF</div>
                        <div>STUFF</div>
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
        
        <div className="relative border-t-2 border-white">
            <div 
                className=" hidden dark:bg-fixed dark:bg-no-repeat dark:bg-contain dark:absolute dark:opacity-50  dark:w-[34%] dark:h-[100%] z-0 dark:md:block"
                style={{backgroundImage: `url(${mountainBgWhite})`}}

            />

            <div 
                className=" hidden md:block dark:hidden bg-fixed bg-no-repeat opacity-30 bg-left bg-contain absolute w-[34%] h-[100%] z-0 "
                style={{backgroundImage: `url(${mountainBg})`}}

            />
            
            <div className=" block md:flex md:flex-col md:flex-wrap md:items-between md:items-center border-t-2 border-white dark:border-black">
                <Accordion open={open1 === 1} className="p-2 lg:w-1/3 md:w-1/2">
                    <AccordionHeader onClick={() => handleOpen1(1)} className="justify-center border-2 border-white bg-[#BC986A] dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-2 dark:hover:border-black rounded-lg text-black hover:text-white">
                        Who am I?
                    </AccordionHeader>
                    <AccordionBody className="text-center text-black font-extrabold bg-[#9AC4E4] dark:bg-amber-800 transition-colors rounded-lg border border-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dignissimos qui non a error labore, sunt possimus accusantium accusamus sit?
                    </AccordionBody>
                </Accordion>

                <Accordion open={open2 === 2} className="p-2 lg:w-1/3 md:w-1/2">
                    <AccordionHeader onClick={() => handleOpen2(2)} className="justify-center border-2 border-white bg-[#BC986A] dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-2 dark:hover:border-black rounded-lg text-black hover:text-white">
                        What frameworks do I know?
                    </AccordionHeader>
                    <AccordionBody className=" text-center text-black font-extrabold bg-[#9AC4E4] dark:bg-amber-800 transition-colors rounded-lg border border-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt asperiores deleniti perspiciatis mollitia omnis, sapiente ea explicabo aperiam a optio eos rem. Sequi, laborum recusandae sed dolor perferendis natus veritatis porro quisquam saepe officia excepturi veniam provident quo qui atque beatae magni velit! Voluptate beatae illum perspiciatis deserunt impedit? Pariatur?
                    </AccordionBody>
                </Accordion>
                <Accordion open={open3 === 3} className="p-2 lg:w-1/3 md:w-1/2">
                    <AccordionHeader onClick={() => handleOpen3(3)} className="justify-center border-2 border-white bg-[#BC986A] dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-2 dark:hover:border-black rounded-lg text-black hover:text-white">
                        What is my experience?
                    </AccordionHeader>
                    <AccordionBody className="text-center text-black font-extrabold bg-[#9AC4E4] dark:bg-amber-800 transition-colors rounded-lg border border-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit illum voluptas odit sed eum aperiam perspiciatis vero veritatis velit, sequi ullam quidem rem et id ratione doloremque libero earum pariatur voluptatum? Fuga temporibus, deserunt porro asperiores quo commodi culpa corrupti. Accusantium ea beatae esse magni facere iusto id perspiciatis inventore expedita vero modi ipsa delectus, eos vitae, placeat neque ut ad alias tempora quidem, quisquam porro. Explicabo recusandae animi laudantium ipsum accusamus expedita ipsam maiores, error ullam veritatis fugiat labore aut eligendi deleniti beatae quibusdam asperiores ad sit autem maxime soluta ex? Voluptatem modi nam consectetur? Assumenda, dolorum. Non?
                    </AccordionBody>
                </Accordion>
                <Accordion open={open4 === 4} className="p-2 lg:w-1/3 md:w-1/2">
                    <AccordionHeader onClick={() => handleOpen4(4)} className="justify-center border-2 border-white bg-[#BC986A] dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-2 dark:hover:border-black rounded-lg text-black hover:text-white">
                        What do I enjoy?
                    </AccordionHeader>
                    <AccordionBody className="text-center text-black font-extrabold bg-[#9AC4E4] dark:bg-amber-800 transition-colors rounded-lg border border-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reiciendis necessitatibus quaerat doloremque nobis, voluptatibus adipisci eveniet mollitia. Natus aliquam quam voluptatibus iste unde, quasi perspiciatis quas adipisci dolore eaque deleniti, officia consequuntur cumque vel.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open5 === 5} className="p-2 lg:w-1/3 md:w-1/2">
                    <AccordionHeader onClick={() => handleOpen5(5)} className="justify-center border-2 border-white bg-[#BC986A] dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-2 dark:hover:border-black rounded-lg text-black hover:text-white">
                        What are my goals?
                    </AccordionHeader>
                    <AccordionBody className="text-center text-black font-extrabold bg-[#9AC4E4] dark:bg-amber-800 transition-colors rounded-lg border border-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reiciendis necessitatibus quaerat doloremque nobis, voluptatibus adipisci eveniet mollitia. Natus aliquam quam voluptatibus iste unde, quasi perspiciatis quas adipisci dolore eaque deleniti, officia consequuntur cumque vel.
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
    </>
    );
};

export default Home;
