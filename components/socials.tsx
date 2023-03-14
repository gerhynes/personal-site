import { FaTwitter, FaGithub, FaLinkedin, FaMastodon } from "react-icons/fa";

function Socials() {
  return (
    <div className="flex gap-6">
      <a
        className="group -m-1 p-1"
        aria-label="Twitter"
        href="https://twitter.com/Gerard_K_Hynes"
      >
        <FaTwitter
          className="h-6 w-6 fill-teal-500 transition group-hover:fill-teal-600"
          aria-hidden="true"
        />
      </a>
      <a
        rel="me"
        className="group -m-1 p-1"
        aria-label="LinkedIn"
        href="https://mastodon.ie/@gerhynes"
      >
        <FaMastodon
          className="h-6 w-6 fill-teal-500 transition group-hover:fill-teal-600"
          aria-hidden="true"
        />
      </a>
      <a
        className="group -m-1 p-1"
        aria-label="GitHub"
        href="https://github.com/gerhynes"
      >
        <FaGithub
          className="h-6 w-6 fill-teal-500 transition group-hover:fill-teal-600"
          aria-hidden="true"
        />
      </a>
      <a
        className="group -m-1 p-1"
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/hynesgk/"
      >
        <FaLinkedin
          className="h-6 w-6 fill-teal-500 transition group-hover:fill-teal-600"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
export default Socials;
