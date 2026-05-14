import { CalendarDays, Mail, Phone, MapPin } from "lucide-react";

const personalInfo = [
  {
    id: 1,
    icon: CalendarDays,
    title: "Date of Birth",
    value: "5 September 1999",
  },
  {
    id: 2,
    icon: Mail,
    title: "Email",
    value: "umair.dev55@ gmail.com",
  },
  {
    id: 3,
    icon: Phone,
    title: "Phone",
    value: "+92 308 6754944",
  },
  {
    id: 4,
    icon: MapPin,
    title: "Location",
    value: "Township, Lahore",
  },
];

const AboutInfo = () => {
  return (
    <section className="w-full">
      <div className="mb-8 text-center p-4">
        <h2 className="h2 font-bold"> Get to Know Me </h2>
        <p className="para mt-2">quick overview of my personal information</p>
      </div>
      <div className="w-full p-2 rounded-4xl">
        {personalInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-center gap-10 sm:gap-5 md:gap-10 custom-border rounded-3xl m-4"
            >
              <div className="">
                <Icon className="size-7" />
              </div>

              <div>
                <h3 className="h5 font-bold">{item.title}</h3>
                <p className="para">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutInfo;
