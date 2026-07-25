import { Code2, ShieldCheck, Zap } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Code2 size={34} />,
      title: "Modern Development",
      description:
        "We build scalable web applications using React, Node.js and MongoDB with clean architecture.",
    },
    {
      icon: <Zap size={34} />,
      title: "High Performance",
      description:
        "Lightning-fast websites optimized for speed, SEO, and an exceptional user experience.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Secure Solutions",
      description:
        "Enterprise-grade security practices to keep your data and business protected.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            We Build Websites That Grow Businesses
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            From idea to deployment, we craft modern digital products that
            combine beautiful design with powerful technology.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold mt-8">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7 mt-4">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;