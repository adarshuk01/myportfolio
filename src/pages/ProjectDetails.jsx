import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../public/data/projectData";
import { ExternalLink, Github } from "lucide-react";

function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((item) => item.id == id);
    const videoRef = useRef(null);

    if (!project) {
        return <h2 className="text-red-500">Project not found</h2>;
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2; // 🔹 set default speed (1.25x here)
        }
    }, [project]);

    return (
        <div className="">
            <h1 className="lg:text-4xl text-2xl uppercase font-bold mb-4">{project.name}</h1>
            <div className="flex gap-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                >
                  <ExternalLink size={18} /> Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-medium"
                >
                  <Github size={18} /> Code
                </a>
              </div>
            <hr className="my-4" />

            {/* Project Video */}
            {project.video && (
                <video
                    autoPlay
                    ref={videoRef}

                    src={project.video}
                    controls
                    className="w-full  rounded-lg shadow-md mb-6"
                />
            )}

            <h1 className="text-2xl uppercase font-bold mb-4 underline">Technology</h1>

            {/* Languages */}
            <div className="flex gap-2 flex-wrap mb-10">
                {project.languages.map((lang, idx) => (
                    <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-yellow-400 rounded-full font-medium"
                    >
                        {lang}
                    </span>
                ))}
            </div>

            {/* Features */}
            <div className="space-y-4">
                {project.features.map((feature) => (
                    <div
                        key={feature.id}
                        className="p-4 flex flex-col shadow rounded-lg border hover:shadow-lg transition"
                    >
                        <h3 className="text-xl uppercase font-semibold ">{feature.title}</h3>
                        <hr className="my-2" />
                        <div className="grid lg:grid-cols-1 grid-cols-1 gap-4">
                            {feature.image.map(items => (
                                <img
                                    src={items}
                                    alt={feature.title}
                                    className="w-full  object-cover rounded-md mb-3"
                                />
                            ))}

                        </div>

                        <div>
                            <p className=" text-lg">{feature.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectDetails;
