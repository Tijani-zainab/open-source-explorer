import { useState, useEffect } from "react";
import Navbar from "../Components/navbar";
import axios from "axios";

const Explore = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.github.com/search/issues?q=org:facebook+is:issue+is:open"
      )
      .then((response) => {
        setProjects(response.data.items);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  console.log(projects);
  return (
    <div className="text-red-400">
      <Navbar />
      <div className="flex flex-col h-full justify-center items-center p-3">
        <h1 className="text-2xl my-8">List of Open Source Projects</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Error</h1>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <h1 className="text-xl font-bold">{project.title}</h1>
                <p className="text-gray-500">
                  Link Created: {project.created_at}
                </p>
                <p className="text-gray-500">
                  Link Updated: {project.updated_at}
                </p>
                <a
                  href={project.repository_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to repo
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
