import { useEffect } from "react";
import { useParams } from "react-router-dom";

const IndividualProject = () => {
    const { key } = useParams();
    console.log(key);
    let projectName = false;
    useEffect(() => {
        switch (key) {
            case '0': projectName = "Tic Tac Toe";
                break;
            case '1': projectName = "Mission Control";
                break;
            case '2': projectName = "Gutterballs";
                break;
            case '3': projectName = "All Star Wars All The Time";
                break;
            case '4': projectName = "Handwork Clothing";
                break;
            default: projectName = "";
        }
        console.log(projectName)
    }, [key]);

    return(
        <div className="bg-black text-bold text-white"> Project Name: {projectName} </div>
    );
};

export default IndividualProject;