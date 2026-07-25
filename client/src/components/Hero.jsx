import heroImage from "../assets/hero.svg";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  ShieldCheck,
} from "lucide-react";

function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">

              <ShieldCheck size={18} />

              Trusted Web Development Agency

            </div>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight">

              Launch High-Performing

              <br />

              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">

                Digital Experiences

              </span>

            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">

              We help startups and businesses build modern,
              scalable and high-performing web applications
              using React, Node.js and MongoDB.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a href="#contact">

                <button className="cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300">

                  Start Your Project

                  <ArrowRight size={18} />

                </button>

              </a>

              <a href="#services">

                <button className="cursor-pointer px-8 py-4 rounded-xl border border-slate-300 hover:border-blue-600 hover:text-blue-600 transition">

                  View Services

                </button>

              </a>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div className="flex gap-3">

                <BriefcaseBusiness className="text-blue-600" />

                <div>

                  <h3 className="font-bold text-2xl">
                    100+
                  </h3>

                  <p className="text-slate-500 text-sm">
                    Projects
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <Clock3 className="text-blue-600" />

                <div>

                  <h3 className="font-bold text-2xl">
                    24 hrs
                  </h3>

                  <p className="text-slate-500 text-sm">
                    Response
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <ShieldCheck className="text-blue-600" />

                <div>

                  <h3 className="font-bold text-2xl">
                    99%
                  </h3>

                  <p className="text-slate-500 text-sm">
                    Satisfaction
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <img
              src={heroImage}
              alt="Hero"
              className="w-full max-w-xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;