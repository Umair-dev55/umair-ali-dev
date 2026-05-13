import CountUp from "react-countup";

const AboutStats = () => {
  return (
    <div className="flex flex-col justify-center lg:flex-row xl:items-center gap-8 xl:gap-12">
      <div className="flex gap-4 bg-tertiary rounded-2xl p-4 hover:bg-tertiary-hover border border-accent hover:border-accent-hover">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp
            start={0}
            end={12}
            delay={2}
            duration={5}
            className="block w-15 "
          />
          <div>+</div>
        </div>
        <span>
          Months of <br /> experience
        </span>
      </div>
      <div className="flex gap-4 bg-tertiary rounded-2xl p-4 hover:bg-tertiary-hover border border-accent hover:border-accent-hover">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp
            start={0}
            end={5}
            delay={2}
            duration={5}
            className="block w-15 "
          />
          <div>+</div>
        </div>
        <span>
          Clients <br /> Worldwide
        </span>
      </div>
    </div>
  );
};

export default AboutStats;
