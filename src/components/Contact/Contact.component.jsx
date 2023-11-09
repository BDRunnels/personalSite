import { Card, CardBody, Button } from "@material-tailwind/react";
const Contact = () => {
    return(
            <div className="flex items-center justify-center h-[80vh]">
                    <Card className="mx-auto dark:bg-black dark:border-2 dark:border-white">
                    <CardBody>
                        <Button className="font-bold dark:text-white text-lg hover:bg-teal-800"> <a href="mailto:bryan.d.runnels@gmail.com">bryan.d.runnels@gmail.com</a></Button>
                        <h1 className="font-bold dark:text-white text-2xl text-center mt-2"> 816.853.7789 </h1>
                    </CardBody>
                    </Card>
            
            </div>
          
    );
};

export default Contact;