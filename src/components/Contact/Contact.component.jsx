import { Card, CardBody, Button } from "@material-tailwind/react";
import ContactForm from "../ContactForm/ContactForm.component";
const Contact = () => {
    return(
            <div className="flex items-center justify-center h-[80vh]">
                <Card className="mx-auto dark:bg-black dark:border-2 dark:border-white max-w-[90vw] ">
                    <CardBody className="">
                        <a href="mailto:bryan.d.runnels@gmail.com" className=" font-bold dark:text-white text-black text-xl hover:underline">bryan.d.runnels@gmail.com</a>
                        <h2 className="text-center text-xl text-black dark:text-white mt-2"> Kansas, USA </h2>
                        <h2 className="text-center text-xl text-black dark:text-white mt-2"> Open to Relocation </h2>
                    </CardBody>
                </Card>
            </div>
    );
};

export default Contact;