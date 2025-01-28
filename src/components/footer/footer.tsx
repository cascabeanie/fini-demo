import { Link } from "react-router";

import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <>
      <Link to="https://github.com/cascabeanie">
        <div className="flex cursor-pointer gap-2 bg-white font-['IM_Fell_French_Canon'] tracking-widest text-gray-800 hover:animate-pulse">
          <h4>Made by cascabeanie</h4>
          <SiGithub className="hover:animate-spin" />
        </div>
      </Link>
    </>
  );
}
