import { useEffect, useState } from "react";
import axios from 'axios';
const useGetProjects = () => {
    const [projects, setProjects] = useState([]);

    const getProjects = async() => {
        await axios.get("https://api-credit-provider.herokuapp.com/")
        .then(response => {
            setProjects(response.data);
        });
    }

    useEffect(() => {
        getProjects();
    }, []);

    return projects;
}

export default useGetProjects;