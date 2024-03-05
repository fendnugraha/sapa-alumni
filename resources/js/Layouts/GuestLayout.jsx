import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "@/Components/Dropdown";

export default function Guest({ children }) {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                </Link>
              </div>
              <h2 className="ml-3 font-semibold text-gray-800">
                FORUM ALUMNI SMKN 2 BALEENDAH
              </h2>
            </div>
            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex items-center">
              <Dropdown>
                <Dropdown.Trigger>
                  <button className="hover:text-orange-400">
                    <FontAwesomeIcon icon={faCircleUser} /> Login/Register
                  </button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <Dropdown.Link href={route("login")}>Login</Dropdown.Link>
                  <Dropdown.Link href={route("register")}>
                    Register
                  </Dropdown.Link>
                </Dropdown.Content>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
      <div className="">{children}</div>
    </>
  );
}
