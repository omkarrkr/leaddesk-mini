import {
  Globe,
  Mail,
  ExternalLink,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}

        <div>

          <h2 className="text-3xl font-bold text-white">
            WebCraft Studio
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            We build modern websites and scalable web
            applications for startups and businesses.
          </p>

        </div>

        {/* Links */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-4">
            Contact
          </h3>

          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <Mail size={18} />
              hello@webcraft.com
            </div>

            <div className="flex items-center gap-3">
              <Globe size={18} />
              Bengaluru, India
            </div>

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-4">
            Connect
          </h3>

          <div className="flex gap-4">

  <a
    href="https://github.com/omkarrkr"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-blue-600 transition"
  >
    <ExternalLink size={18} />
    GitHub
  </a>

</div>
        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center text-sm text-gray-400">

        © 2026 WebCraft Studio. All Rights Reserved.

        <br />

        Built for <span className="font-semibold text-white">
          Digital Heroes Training Task
        </span>

      </div>

    </footer>
  );
}

export default Footer;