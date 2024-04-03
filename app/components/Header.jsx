import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

const Header = async ({ username }) => {
  const { userId } = auth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 mb-5 ">
      <div className="flex items-center">
        {userId ? (
          <Link href="dashboard">
            <div className="text-lg text-black font-bold ">Capitalyzer</div>
          </Link>
        ) : (
          <Link href="/">
            <div className="text-lg text-black font-bold ">Capitalyzer</div>
          </Link>
        )}
      </div>
      <div className="flex items-center text-white">
        {!userId && (
          <>
            <Link
              href="sign-in"
              className="text-black hover:text-gray-500 mr-4"
            >
              Sign In
            </Link>
            <Link
              href="sign-up"
              className="text-black hover:text-gray-500 mr-4"
            >
              Sign Up
            </Link>
          </>
        )}
        <div className="flex items-center">
          {userId && (
            <>
              <Link
                href="portfolio"
                className="text-black hover:text-gray-500 ml-4 mr-4"
              >
                Portfolio
              </Link>
              <Link
                href="#"
                className="text-black hover:text-gray-500 ml-4 mr-4"
              >
                News
              </Link>
              <Link
                href="alert"
                className="text-black hover:text-gray-500 ml-4 mr-4"
              >
                Alerts
              </Link>
            </>
          )}
        </div>
        {userId && (
          <Link href="profile" className="text-black ml-4 mr-4">
            Profile
          </Link>
        )}
        <div className="ml-auto">
          <UserButton afterSignOutUrl="components" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
