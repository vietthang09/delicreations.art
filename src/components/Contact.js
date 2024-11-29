import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div id="contact" className="py-40">
      <h2 className="text-[72px] text-center">
        Tell me about your next project
      </h2>

      <div className="mt-16 flex justify-center">
        <a
          href="mailto:delicreations.art@gmail.com"
          className="flex bg-dark text-light py-4 px-6 border-4 rounded-3xl"
        >
          <EnvelopeIcon className="size-4" />
          <span className="ml-2 text-xs">Email Me</span>
        </a>
        <button className="ml-4 flex bg-light text-dark border-4 py-4 px-6 rounded-3xl">
          <PhoneIcon className="size-4" />
          <span className="ml-2 text-xs">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
