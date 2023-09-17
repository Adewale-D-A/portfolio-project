import resume from "../assets/Azeez_Adewale_Damilare_Resume.pdf";

const About = () => {
  return (
    <div className=" text-left h-full flex justify-center items-center">
      <div className="w-full flex flex-col gap-5 items-center">
        <h2 className="text-5xl font-Raleway text-center">
          Hi, I'm{" "}
          <span className=" font-extrabold text-[#05d6e2] shadow-md px-3 shadow-[#171717]">
            Adewale
          </span>
        </h2>
        <p className="text-lg">I develop websites and web applications</p>
        <a
          href={resume}
          download
          className="flex items-center gap-3 hover:bg-slate-300 hover:text-black transition-all px-4 py-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span> Résumé</span>
        </a>
      </div>
    </div>
  );
};

export default About;
