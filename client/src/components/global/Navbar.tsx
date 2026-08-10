
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

 
  const admissionsNumber1 = "260766955892";
  const admissionsNumber2 = "260770031271";

  const whatsappMessage =
    "Hello DMI-St. Eugene University Admissions Team. I would like to enquire about applying to the university. Please assist me with the available programmes, admission requirements and application process. Thank you.";

  const createWhatsAppLink = (number: string) => {
    return `https://wa.me/${number}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
  };

  const handleWhatsAppClick = () => {
    setShowWhatsAppOptions(!showWhatsAppOptions);
  };

  return (
    <header className="relative z-50 w-full bg-[#071b4a] text-white shadow-lg">

      
      <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6 lg:px-10">

        
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center"
        >
          <h1 className="text-2xl font-bold tracking-wide">
            Uni-Guide
          </h1>
        </Link>


        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden items-center gap-7 md:flex">

          <Link
            to="/"
            className="text-sm font-medium text-white/90 transition hover:text-blue-300"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-sm font-medium text-white/90 transition hover:text-blue-300"
          >
            Dashboard
          </Link>

          <Link
            to="/programs"
            className="text-sm font-medium text-white/90 transition hover:text-blue-300"
          >
            Programs
          </Link>

          <Link
            to="/classifications"
            className="text-sm font-medium text-white/90 transition hover:text-blue-300"
          >
            Classifications
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-white/90 transition hover:text-blue-300"
          >
            About Us
          </Link>

          <Link
            to="/chat"
            className="text-sm font-medium text-white/90 transition hover:text-blue-300"
          >
            Chat
          </Link>

        </div>


        {/*DESKTOP WHATSAPP */}
        <div className="relative hidden md:block">

          <button
            onClick={handleWhatsAppClick}
            className="group flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-[#20bd5a] hover:shadow-lg"
          >

            <MessageCircle
              size={18}
              strokeWidth={2.4}
              className="transition-transform duration-200 group-hover:scale-110"
            />

            <span>
              Apply via WhatsApp
            </span>

            <ChevronRight
              size={16}
              className={`transition-transform duration-200 ${
                showWhatsAppOptions ? "rotate-90" : ""
              }`}
            />

          </button>


          {/*WHATSAPP OPTIONS */}
          {showWhatsAppOptions && (
            <div className="absolute right-0 top-14 w-[310px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 text-[#101d4f] shadow-2xl">

              <div className="mb-4">

                <div className="flex items-center gap-2">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                    <MessageCircle
                      size={19}
                      className="text-[#25D366]"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Contact Admissions
                    </h3>

                    <p className="text-xs text-gray-500">
                      Choose a WhatsApp contact
                    </p>
                  </div>

                </div>

              </div>


              {/* NUMBER 1 */}
              <a
                href={createWhatsAppLink(admissionsNumber1)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowWhatsAppOptions(false)}
                className="mb-2 flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 transition hover:border-[#25D366] hover:bg-green-50"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                    <MessageCircle
                      size={18}
                      className="text-[#25D366]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Admissions Contact 1
                    </p>

                    <p className="text-xs text-gray-500">
                      076 695 5892
                    </p>
                  </div>

                </div>

                <ChevronRight
                  size={17}
                  className="text-gray-400"
                />

              </a>


              {/* NUMBER 2 */}
              <a
                href={createWhatsAppLink(admissionsNumber2)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowWhatsAppOptions(false)}
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 transition hover:border-[#25D366] hover:bg-green-50"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                    <MessageCircle
                      size={18}
                      className="text-[#25D366]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Admissions Contact 2
                    </p>

                    <p className="text-xs text-gray-500">
                      077 003 1271
                    </p>
                  </div>

                </div>

                <ChevronRight
                  size={17}
                  className="text-gray-400"
                />

              </a>

            </div>
          )}

        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 transition hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </nav>


      
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0b2458] px-6 py-5 md:hidden">

          <div className="space-y-1">

            <Link
              to="/"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              Dashboard
            </Link>

            <Link
              to="/programs"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              Programs
            </Link>

            <Link
              to="/classifications"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              Classifications
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              About Us
            </Link>

            <Link
              to="/chat"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              Chat
            </Link>

          </div>


          {/*  MOBILE WHATSAPP  */}
          <div className="mt-4 border-t border-white/10 pt-4">

            <button
              onClick={handleWhatsAppClick}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#20bd5a]"
            >

              <MessageCircle
                size={19}
                strokeWidth={2.4}
              />

              Apply via WhatsApp

              <ChevronRight
                size={17}
                className={`transition-transform ${
                  showWhatsAppOptions ? "rotate-90" : ""
                }`}
              />

            </button>


            {/* MOBILE OPTIONS */}
            {showWhatsAppOptions && (
              <div className="mt-3 rounded-2xl bg-white p-4 text-[#101d4f] shadow-xl">

                <div className="mb-3">

                  <p className="font-bold">
                    Contact Admissions
                  </p>

                  <p className="text-xs text-gray-500">
                    Choose a WhatsApp contact
                  </p>

                </div>


                {/* MOBILE NUMBER 1 */}
                <a
                  href={createWhatsAppLink(admissionsNumber1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mb-2 flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 transition hover:border-[#25D366] hover:bg-green-50"
                >

                  <div className="flex items-center gap-3">

                    <MessageCircle
                      size={19}
                      className="text-[#25D366]"
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        Admissions Contact 1
                      </p>

                      <p className="text-xs text-gray-500">
                        076 695 5892
                      </p>
                    </div>

                  </div>

                  <ChevronRight
                    size={17}
                    className="text-gray-400"
                  />

                </a>


                {/* MOBILE NUMBER 2 */}
                <a
                  href={createWhatsAppLink(admissionsNumber2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 transition hover:border-[#25D366] hover:bg-green-50"
                >

                  <div className="flex items-center gap-3">

                    <MessageCircle
                      size={19}
                      className="text-[#25D366]"
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        Admissions Contact 2
                      </p>

                      <p className="text-xs text-gray-500">
                        077 003 1271
                      </p>
                    </div>

                  </div>

                  <ChevronRight
                    size={17}
                    className="text-gray-400"
                  />

                </a>

              </div>
            )}

          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;