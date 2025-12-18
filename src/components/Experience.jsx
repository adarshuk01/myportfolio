import React from 'react'

function Experience() {
    const expData = [
  {
    title: "Dhanwis TechInfo Solution",
    role: "Trainer",
    date: "Jan 2025 - July 2025",
    certificate: "MERN Stack Trainer",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Dapibus Nibh Ut Faucibus Nunc, Egestas Id Amet Porttitor. Pulvinar Quisque Sed Amet, Nulla Nunc. Eleifend Sodales Posuere Fusce Tempus Etiam Et Pellentesque. Molestie Risus Enim Neque Eget Dui.",
  }
];
  return (
   <section  className=" py-4">
      <div className="text-center mb-2">
        <h2 className="text-3xl lg:text-4xl font-extrabold uppercase">Work Experience</h2>
       
      </div>

      <div className="max-w-5xl mx-auto divide-y divide-gray-200  p-4">
        {expData.map((edu, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-6 py-2">
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
  )
}

export default Experience
