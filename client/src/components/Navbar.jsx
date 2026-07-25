import { Menu, ArrowRight } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              <span className="text-blue-600">WebCraft</span>
              <span className="text-gray-900"> Studio</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">

            <a
              href="#"
              className="font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </a>

            <a
              href="#services"
              className="font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Services
            </a>

            <a
              href="#contact"
              className="font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </a>

            <a href="#contact">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">

                Get Free Quote

                <ArrowRight size={18} />

              </button>
            </a>

          </nav>

          {/* Mobile Menu */}
          <button className="md:hidden">
            <Menu size={30} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;