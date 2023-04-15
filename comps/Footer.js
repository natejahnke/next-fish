import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReact, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#274059] text-[#b6cce2] p-4">
      <div>
        Made by <FontAwesomeIcon icon={faGithub} inverse />{" "}
        <Link href="https://github.com/natejahnke">
          <a>Nate Jahnke</a>
        </Link>{" "}
        with <FontAwesomeIcon icon={faReact} inverse /> React(Next.js){" "}
        <FontAwesomeIcon icon={faCss3} inverse /> Tailwind CSS{" "}
        <FontAwesomeIcon icon={faDatabase} inverse /> Sanity(Headless CMS)
      </div>
    </footer>
  );
};

export default Footer;

// Path: comps\Footer.js
