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
  const [showWhatsAppOptions, setShowWhatsAppOptions] =
    useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setShowWhatsAppOptions(false);
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

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center"
        >
          <h1 className="text-2xl font-bold tracking-wide">
            Uni-Guide
          </h1>
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="hidden items-center gap-7 md:flex">

          {/* HOME */}

          <Link
            to="/"
            onClick={closeMenu}
            className="
              text-sm
              font-medium
              text-white/90
              transition
              hover:text-blue-300
            "
          >
            Home
          </Link>


          {/* DASHBOARD */}

          <Link
            to="/dashboard"
            onClick={closeMenu}
            className="
              text-sm
              font-medium
              text-white/90
              transition
              hover:text-blue-300
            "
          >
            Dashboard
          </Link>


          {/* PROGRAMS */}

          <Link
            to="/programs"
            onClick={closeMenu}
            className="
              text-sm
              font-medium
              text-white/90
              transition
              hover:text-blue-300
            "
          >
            Programs
          </Link>


          {/* CLASSIFICATIONS */}

          <Link
            to="/classifications"
            onClick={closeMenu}
            className="
              text-sm
              font-medium
              text-white/90
              transition
              hover:text-blue-300
            "
          >
            Classifications
          </Link>


          {/* ABOUT */}

          <Link
            to="/about"
            onClick={closeMenu}
            className="
              text-sm
              font-medium
              text-white/90
              transition
              hover:text-blue-300
            "
          >
            About Us
          </Link>


          {/* CHAT */}

          <Link
            to="/chat"
            onClick={closeMenu}
            className="
              text-sm
              font-medium
              text-white/90
              transition
              hover:text-blue-300
            "
          >
            Chat
          </Link>


          {/* =================================================
              QUERIES
          ================================================= */}

          <Link
            to="/query"
            onClick={closeMenu}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-[#06264A]
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-200
              hover:border-white/30
              hover:bg-[#155A96]
              hover:shadow-lg
            "
          >
            <MessageCircle
              size={16}
              strokeWidth={2.3}
              className="
                transition-transform
                duration-200
                group-hover:scale-110
              "
            />

            <span>
              Queries
            </span>

            <ChevronRight
              size={15}
              className="
                transition-transform
                duration-200
                group-hover:translate-x-0.5
              "
            />
          </Link>

        </div>


        {/* =====================================================
            DESKTOP WHATSAPP
        ===================================================== */}

        <div className="relative hidden md:block">

          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-[#25D366]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-md
              transition
              duration-200
              hover:bg-[#20bd5a]
              hover:shadow-lg
            "
          >

            <MessageCircle
              size={18}
              strokeWidth={2.4}
              className="
                transition-transform
                duration-200
                group-hover:scale-110
              "
            />

            <span>
              Apply via WhatsApp
            </span>

            <ChevronRight
              size={16}
              className={`
                transition-transform
                duration-200
                ${
                  showWhatsAppOptions
                    ? "rotate-90"
                    : ""
                }
              `}
            />

          </button>


          {/* =================================================
              WHATSAPP OPTIONS
          ================================================= */}

          {showWhatsAppOptions && (
            <div
              className="
                absolute
                right-0
                top-14
                w-[310px]
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-4
                text-[#101d4f]
                shadow-2xl
              "
            >

              <div className="mb-4">

                <div className="flex items-center gap-2">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-green-100
                    "
                  >
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


              {/* =================================================
                  CONTACT 1
              ================================================= */}

              <a
                href={createWhatsAppLink(
                  admissionsNumber1
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  setShowWhatsAppOptions(false)
                }
                className="
                  mb-2
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  py-3
                  transition
                  hover:border-[#25D366]
                  hover:bg-green-50
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-green-100
                    "
                  >
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


              {/* =================================================
                  CONTACT 2
              ================================================= */}

              <a
                href={createWhatsAppLink(
                  admissionsNumber2
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  setShowWhatsAppOptions(false)
                }
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  py-3
                  transition
                  hover:border-[#25D366]
                  hover:bg-green-50
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-green-100
                    "
                  >
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


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            rounded-lg
            p-2
            transition
            hover:bg-white/10
            md:hidden
          "
          aria-label="Toggle navigation menu"
        >

          {menuOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}

        </button>

      </nav>


      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================= */}

      {menuOpen && (
        <div
          className="
            border-t
            border-white/10
            bg-[#0b2458]
            px-6
            py-5
            md:hidden
          "
        >

          <div className="space-y-1">

            {/* HOME */}

            <Link
              to="/"
              onClick={closeMenu}
              className="
                block
                rounded-lg
                px-4
                py-3
                text-sm
                font-medium
                transition
                hover:bg-white/10
              "
            >
              Home
            </Link>


            {/* DASHBOARD */}

            <Link
              to="/dashboard"
              onClick={closeMenu}
              className="
                block
                rounded-lg
                px-4
                py-3
                text-sm
                font-medium
                transition
                hover:bg-white/10
              "
            >
              Dashboard
            </Link>


            {/* PROGRAMS */}

            <Link
              to="/programs"
              onClick={closeMenu}
              className="
                block
                rounded-lg
                px-4
                py-3
                text-sm
                font-medium
                transition
                hover:bg-white/10
              "
            >
              Programs
            </Link>


            {/* CLASSIFICATIONS */}

            <Link
              to="/classifications"
              onClick={closeMenu}
              className="
                block
                rounded-lg
                px-4
                py-3
                text-sm
                font-medium
                transition
                hover:bg-white/10
              "
            >
              Classifications
            </Link>


            {/* ABOUT */}

            <Link
              to="/about"
              onClick={closeMenu}
              className="
                block
                rounded-lg
                px-4
                py-3
                text-sm
                font-medium
                transition
                hover:bg-white/10
              "
            >
              About Us
            </Link>


            {/* CHAT */}

            <Link
              to="/chat"
              onClick={closeMenu}
              className="
                block
                rounded-lg
                px-4
                py-3
                text-sm
                font-medium
                transition
                hover:bg-white/10
              "
            >
              Chat
            </Link>


            {/* =================================================
                MOBILE QUERIES
            ================================================= */}

            <Link
              to="/query"
              onClick={closeMenu}
              className="
                mt-2
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-[#06264A]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-md
                transition
                hover:bg-[#155A96]
              "
            >

              <MessageCircle
                size={17}
                strokeWidth={2.3}
              />

              <span>
                Queries
              </span>

              <ChevronRight size={16} />

            </Link>

          </div>


          {/* =================================================
              MOBILE WHATSAPP
          ================================================= */}

          <div
            className="
              mt-4
              border-t
              border-white/10
              pt-4
            "
          >

            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#25D366]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-md
                transition
                hover:bg-[#20bd5a]
              "
            >

              <MessageCircle
                size={19}
                strokeWidth={2.4}
              />

              <span>
                Apply via WhatsApp
              </span>

              <ChevronRight
                size={17}
                className={`
                  transition-transform
                  ${
                    showWhatsAppOptions
                      ? "rotate-90"
                      : ""
                  }
                `}
              />

            </button>


            {/* =================================================
                MOBILE WHATSAPP OPTIONS
            ================================================= */}

            {showWhatsAppOptions && (
              <div
                className="
                  mt-3
                  rounded-2xl
                  bg-white
                  p-4
                  text-[#101d4f]
                  shadow-xl
                "
              >

                <div className="mb-3">

                  <p className="font-bold">
                    Contact Admissions
                  </p>

                  <p className="text-xs text-gray-500">
                    Choose a WhatsApp contact
                  </p>

                </div>


                {/* MOBILE CONTACT 1 */}

                <a
                  href={createWhatsAppLink(
                    admissionsNumber1
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="
                    mb-2
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-gray-200
                    px-4
                    py-3
                    transition
                    hover:border-[#25D366]
                    hover:bg-green-50
                  "
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


                {/* MOBILE CONTACT 2 */}

                <a
                  href={createWhatsAppLink(
                    admissionsNumber2
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-gray-200
                    px-4
                    py-3
                    transition
                    hover:border-[#25D366]
                    hover:bg-green-50
                  "
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