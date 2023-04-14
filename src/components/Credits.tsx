// icons
import {
  BsGithub,
  BsFillBriefcaseFill,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const Credits = () => {
  return (
    <div className="dark:text-grayishBlue relative text-center text-xs lg:mt-auto lg:text-sm mt-16 text-white/50">
      <p>Developed by Rashid Shamloo</p>
      <ul className="mt-2 flex items-center justify-center gap-x-3 text-lg  [&_a]:transition-all [&_a]:duration-500 hover:[&_a]:text-pink">
        <li>
          <a
            href="https://www.rashidshamloo.ir"
            title="Portfolio"
            target="_blank"
          >
            <BsFillBriefcaseFill />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rashidshamloo"
            title="GitHub"
            target="_blank"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rashid-shamloo/"
            title="LinkedIn"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/rashidshamloo"
            title="Twitter"
            target="_blank"
          >
            <BsTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Credits;
