import { useRef } from "react";

// react email validator
import { validate } from "react-email-validator";

// react responsive
import { useMediaQuery } from "react-responsive";

// icons
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

//components
import TransitionEffect from "./TransitionEffect";
import Credits from "./Credits";

const Footer = () => {
  // button ref
  const emailRef = useRef<HTMLInputElement>(null);
  // error ref
  const errorRef = useRef<HTMLParagraphElement>(null);

  // detect small screens to change "Credits" placement
  const matches = useMediaQuery({ query: "(max-width:900px)" });

  // handles email form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate(emailRef.current?.value)) {
      emailRef.current!.value = "";
      alert("Email Submitted!");
      errorRef.current?.classList.add("hidden");
    } else {
      if (errorRef.current) {
        errorRef.current.textContent = "Check your email please";
        errorRef.current.classList.remove("hidden");
      }
    }
  };
  return (
    <footer className="overflow-hidden text-white">
      <picture>
        <source
          srcSet="images/bg-footer-top-desktop.svg"
          media="(min-width:600px)"
        />
        <img
          src="images/bg-footer-top-mobile.svg"
          alt=""
          aria-hidden="true"
          className="w-full"
        />
      </picture>
      <div className="flex flex-col-reverse items-center justify-around bg-veryDarkCyan pb-4 pt-16 lg:flex-row lg:items-stretch lg:py-16">
        {matches && <Credits />}
        <TransitionEffect
          effect="fadeLeft"
          duration={2}
          className="mt-24 max-w-[85%] lg:mt-0 lg:max-w-[20rem]"
        >
          <a href="#0" aria-label="Home">
            <img
              src="images/logo.svg"
              aria-hidden="true"
              alt="Huddle Logo"
              className="max-w-[12rem] brightness-0 invert lg:max-w-full"
            />
          </a>
          <p className="mt-6 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <div className="mt-10 flex items-center">
            <img
              src="images/icon-phone.svg"
              aria-hidden="true"
              alt=""
              className=""
            />
            <p className="ml-6">Phone: +1-543-123-4567</p>
          </div>
          <div className="mt-6 flex items-center">
            <img
              src="images/icon-email.svg"
              aria-hidden="true"
              alt=""
              className=""
            />
            <p className="ml-6">example@huddle.com</p>
          </div>
          <div className="mt-10 flex gap-5 text-3xl lg:gap-6 lg:text-4xl [&>a]:transition-all [&>a]:duration-500 hover:[&>a]:text-pink">
            <a href="#0" title="Facebook">
              <FaFacebook />
            </a>
            <a href="#0" title="Instagram">
              <FaInstagram />
            </a>
            <a href="#0" title="Twitter">
              <FaTwitter />
            </a>
          </div>
        </TransitionEffect>
        <TransitionEffect
          effect="fadeRight"
          duration={2}
          className="flex max-w-[85%] flex-col lg:max-w-[33rem]"
        >
          <h2 className="font-poppins text-xl uppercase lg:text-2xl">
            Newsletter
          </h2>
          <p className="mt-6 text-sm leading-relaxed lg:max-w-[65%]">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>
          <div className="">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="mt-10 flex flex-col items-end justify-between gap-4 lg:flex-row lg:items-start lg:gap-0"
            >
              <div className="w-full">
                <input
                  ref={emailRef}
                  type="text"
                  name="email"
                  aria-label="Email"
                  className="h-12 w-full rounded-md px-2 text-lg text-veryDarkCyan outline-pink"
                />
                <p
                  ref={errorRef}
                  className="mt-1 hidden pl-1 text-sm text-lightRed"
                ></p>
              </div>

              <button className="ml-10 h-12 rounded-md bg-pink px-10 font-poppins font-bold transition-all duration-500 hover:bg-lightPink hover:shadow-md hover:shadow-pink/50">
                Subscribe
              </button>
            </form>
          </div>
          {!matches && <Credits />}
        </TransitionEffect>
      </div>
    </footer>
  );
};

export default Footer;
