import { useEffect, useState } from "react";
import getProjects from "../services/projectService";

const useGetProjects = () => {
  const [projects, setProjects] = useState([]);
  const changeProjects = async () => {
    setProjects(await getProjects());
  };
  useEffect(() => {
    changeProjects();
  }, []);

  return projects;
};

export default useGetProjects;
