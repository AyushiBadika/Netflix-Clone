import { LanguagesIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-[#B0B0B1] py-8 px-8 lg:px-32">
      <div className="  ">
        <p className="mb-6 ">
          Questions? Call{" "}
          <a href="tel:000-800-919-1694" className="underline ">
            000-800-919-1694
          </a>
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap md:justify-between gap-4 mb-8 ">
          <div className="flex flex-col gap-3">
            <a href="#" className="block underline">
              FAQ
            </a>

            <a href="#" className="block underline">
              Ways to Watch
            </a>
            <a href="#" className="block underline">
              Cookie Preferences
            </a>
            <a href="#" className="block underline">
              Speed Test
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="block underline">
              Help Centre
            </a>
            <a href="#" className="block underline">
              Investor Relations
            </a>

            <a href="#" className="block underline">
              Corporate Information
            </a>
            <a href="#" className="block underline">
              Legal Notices
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="block underline">
              Account
            </a>
            <a href="#" className="block underline">
              Jobs
            </a>
            <a href="#" className="block underline">
              Privacy
            </a>

            <a href="#" className="block underline">
              Only on Netflix
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="block underline">
              Media Centre
            </a>
            <a href="#" className="block underline">
              Terms of Use
            </a>

            <a href="#" className="block underline">
              Contact Us
            </a>
          </div>
        </div>

        <div className="mb-6">
          <button className="border border-gray-600  px-4 py-1 rounded-md  flex gap-2">
            <LanguagesIcon className="w-5" />
            English
          </button>
        </div>

        <p className="text-sm">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
