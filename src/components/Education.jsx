import React from "react";

const educationData = [
  {
    title: "Kannur University",
    role: "Student",
    date: "July 2019 - April 2022",
    certificate: "BSc Computer Science",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Dapibus Nibh Ut Faucibus Nunc, Egestas Id Amet Porttitor. Pulvinar Quisque Sed Amet, Nulla Nunc. Eleifend Sodales Posuere Fusce Tempus Etiam Et Pellentesque. Molestie Risus Enim Neque Eget Dui.",
  },
  {
    title: "Higher Secondary Education",
    role: "Student",
    date: "June 2017 - March 2019",
    certificate: "Computer Science",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Dapibus Nibh Ut Faucibus Nunc, Egestas Id Amet Porttitor. Pulvinar Quisque Sed Amet, Nulla Nunc. Eleifend Sodales Posuere Fusce Tempus Etiam Et Pellentesque. Molestie Risus Enim Neque Eget Dui.",
  },
  {
    title: "Web Developement Course",
    role: "Intern",
    date: "Feb 2024 - Jul 2024",
    certificate: "TryCode Innovation ,Calicut",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Dapibus Nibh Ut Faucibus Nunc, Egestas Id Amet Porttitor. Pulvinar Quisque Sed Amet, Nulla Nunc. Eleifend Sodales Posuere Fusce Tempus Etiam Et Pellentesque. Molestie Risus Enim Neque Eget Dui.",
  },
];

export default function Education() {
  return (
    <section  className=" py-4">
      <div className="text-center mb-2">
        <h2 className=" text-3xl lg:text-4xl  font-extrabold uppercase">Education</h2>
             </div>

      <div className="max-w-5xl mx-auto divide-y divide-gray-200  p-4">
        {educationData.map((edu, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-2 py-2">
            {/* Left */}
            <div>
              <h3 className="text-lg font-semibold ">{edu.title}</h3>
              <p className="font-light">{edu.role}</p>
              <span className="inline-block bg-yellow-400 text-white text-xs px-3 py-1 rounded mt-2">
                {edu.date}
              </span>
            </div>

            {/* Right */}
            <div>
              <h3 className="text-lg font-semibold ">{edu.certificate}</h3>
              <p className="font-light mt-2">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
