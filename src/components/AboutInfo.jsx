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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {personalInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-2xl border border-accent hover:border-accent-hover bg-tertiary hover:bg-tertiary-hover p-4 backdrop-blur-sm transition-all duration-300 "
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10">
                <Icon className="text-accent size-6 " />
              </div>

              <div>
                <h3 className="h5 font-extrabold">{item.title}</h3>

                <p className="text-white  mt-1">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutInfo;
