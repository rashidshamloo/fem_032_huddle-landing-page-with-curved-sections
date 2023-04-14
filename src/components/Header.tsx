const Header = () => {
  return (
    <header className="flex justify-between p-6 md:mx-auto md:max-w-[78%] md:px-0 md:py-16">
      <a href="#0" aria-label="Home">
        <img
          src="images/logo.svg"
          aria-hidden="true"
          alt="Huddle Logo"
          className="w-[6rem] md:w-auto"
        />
      </a>
      <a
        href="#0"
        className="flex items-center justify-center rounded-full border-[1px] border-pink px-4 py-1 text-xs text-pink drop-shadow-md hover:border-lightPink hover:text-lightPink md:px-8 md:py-2 md:text-base"
      >
        Try it Free
      </a>
    </header>
  );
};

export default Header;
