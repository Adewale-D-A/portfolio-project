const Contact = () => {
  return (
    <div className="w-full">
      <div className="w-full ml-10 md:ml-24 pr-10">
        <div className="pt-10">
          <p className=" uppercase text-gray-300 text-lg">
            HOW TO GET IN TOUCH
          </p>
          <h2 className="uppercase text-gray-50 text-5xl">Contact.</h2>
        </div>
        <p className="mt-5 text-lg md:text-md text-gray-400 max-w-4xl">
          Get in touch with me and let's have a project together.
        </p>
      </div>

      <div className="mt-16 flex justify-center gap-10">
        <a
          href="https://www.linkedin.com/in/adewale-d-azeez/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
        <a
          href="mailto:adewale.d.a@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          Send me Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
