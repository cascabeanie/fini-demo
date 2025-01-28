import { Link } from "react-router";

import { CircleCheckBig } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="flex w-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <CircleCheckBig />
          <h1 className="font-['IM_Fell_French_Canon'] text-2xl font-bold">
            fini
          </h1>
        </Link>

        <span>
          <Link
            to="/localstorage"
            className="flex items-center gap-2 text-lg font-light underline underline-offset-2"
          >
            Information on local storage
          </Link>
        </span>
      </nav>
    </>
  );
}
