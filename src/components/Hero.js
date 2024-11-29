export default function Hero() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("delicreations.art@gmail.com");
  };
  return (
    <div>
      <div className="container mx-auto flex items-center justify-between">
        <div className="space-x-2 bg-gray-200/50 rounded-3xl p-1">
          <span className="pl-2">delicreations.art@gmail.com</span>
          <button
            onClick={handleCopyEmail}
            className="bg-white px-8 py-3 rounded-3xl hover:bg-gray-200"
          >
            Copy
          </button>
        </div>

        <p className="space-x-4">
          <a
            href="https://www.linkedin.com/company/deli-creations-team"
            target="_blank"
          >
            LinkedIn
          </a>
          <span>/</span>
          <a
            href="https://www.linkedin.com/company/deli-creations-team"
            target="_blank"
          >
            Instagram
          </a>
        </p>
      </div>
      <div className="mx-auto h-[50vh] flex justify-center items-end">
        <div className="space-y-24">
          <h1 className="text-center text-3xl uppercase font-semibold leading-10 tracking-widest	">
            <p>Building digital</p>
            <p>products, brands, and</p>
            <p>experience.</p>
          </h1>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="bg-dark text-sm text-light px-8 py-4 rounded-3xl hover:bg-slate-900"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
