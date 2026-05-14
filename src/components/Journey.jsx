import React from "react";

const myJourney = [
  {
    id: 1,
    role: "WordPress Theme Developer",
    duration: "Apr 2025 – Sep 2025",
    company: "Devinsta",
  },
  {
    id: 2,
    role: "React / Next.js Developer",
    duration: "Present",
    company: "7 Kings Code LLC",
  },
];

const Journey = () => {
  return (
    <section className="w-full py-10">
      <div className="max-w-3xl mx-auto ">
        <div className="mb-8 text-center p-4">
          <h2 className="h2 font-bold">Professional Journey</h2>
          <p className="para mt-2">
            Experience and roles throughout my development career.
          </p>
        </div>

        {myJourney.map((item) => (
          <div key={item.id} className=" rounded-2xl  mb-4 custom-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h5 className="h4 font-bold">{item.role}</h5>

                <p className="para mt-1">{item.company}</p>
              </div>

              <span className="para text-accent whitespace-nowrap">
                {item.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
