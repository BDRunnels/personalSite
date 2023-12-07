import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
    CardBody,
  } from "@material-tailwind/react";
   
  const ContactForm = () => {
    return (
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="black" className="text-center dark:text-white">
          Contact Me
        </Typography>
        <form className="mt-8 w-80 max-w-screen-lg sm:w-96">
          <div className=" flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              className=" dark:text-white text-black"
              required
              
            />
            <Input
              size="lg"
              label="Email"
              type="email"
              className="dark:text-white "
              required
            />
            <Textarea
              size="lg"
              label="Message"
              className=" dark:text-white"
              required
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Send
          </Button>
        </form>
      </Card>
    );
  };

  export default ContactForm;