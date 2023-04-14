// hooks
import { useMediaQuery } from "react-responsive";

// components
import Header from "./components/Header";
import CountUp from "./components/CountUp";
import Section from "./components/Section";
import Footer from "./components/Footer";
import TransitionEffect from "./components/TransitionEffect";

function App() {
  const matches = useMediaQuery({ query: "(max-width:900px)" });
  return (
    <>
      <Header />
      <main className="mx-auto overflow-x-hidden text-center">
        <TransitionEffect duration={2} effect="fadeIn">
          <h1 className="mx-9 mt-24 font-poppins text-2xl font-bold md:mt-[11rem] md:text-5xl md:leading-tight">
            Build The Community Your Fans Will Love
          </h1>
        </TransitionEffect>
        <TransitionEffect duration={2} delay={0.25} effect="scale">
          <p className="mx-9 mt-6 text-sm font-[600] leading-relaxed text-veryDarkCyan/60 md:mx-auto md:mt-10 md:max-w-[38rem] md:text-xl md:text-veryDarkCyan/70">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
        </TransitionEffect>
        <TransitionEffect duration={2} delay={1} effect="fadeDown">
          <a
            href="#0"
            className="mt-12 inline-flex items-center justify-center rounded-full border-[1px] border-none bg-pink px-10 py-3 text-xs font-bold text-white shadow-xl transition-all duration-500 hover:bg-lightPink hover:shadow-pink/40 md:px-24 md:py-6 md:text-xl"
          >
            Get Started For Free
          </a>
        </TransitionEffect>
        <TransitionEffect
          duration={3}
          delay={matches ? 2 : 0}
          effect="scaleDown"
        >
          <img
            src="/images/screen-mockups.svg"
            alt="Screen Mockups"
            aria-hidden="true"
            className="mx-auto mt-24 aspect-[1035/739] w-full max-w-[80%] md:mt-28 md:max-w-[62%]"
          />
        </TransitionEffect>
        <div className="mx-auto mt-32 flex flex-col items-center justify-evenly md:mt-36 md:flex-row">
          <CountUp
            image="icon-communities"
            maxCount={1.4}
            unit="k"
            text="Communities Formed"
          />
          <CountUp
            image="icon-messages"
            maxCount={2.7}
            unit="m"
            text="Messages Sent"
            className="mt-20 md:mt-0"
          />
        </div>
        <Section
          reverse={true}
          image="grow-together"
          bg="bg-veryPaleBlue"
          curve="1"
          title="Grow Together"
          text="Generate meaningful discussions with your audience and build a
                strong, loyal community. Think of the insightful conversations
                you miss out on with a feedback form."
          className="mt-8 md:mt-36"
          imageEffect="scale"
          textEffect="fadeLeft"
          duration={2}
        />
        <Section
          image="flowing-conversation"
          title="Flowing Conversations"
          text="You wouldn't paginate a conversation in real life, so why do it
                online? Our threads have just-in-time loading for a more natural
                flow."
          className="mt-16 md:mt-36"
          imageEffect="rotateY"
          textEffect="fadeRight"
          duration={2}
        />
        <Section
          reverse={true}
          image="your-users"
          bg="bg-veryPaleBlue"
          curve="2"
          title="Your Users"
          text="It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app,
          your users can start chatting immediately."
          className="mt-4 md:mt-36"
          imageEffect="scaleX"
          textEffect="fadeLeft"
        />
        <div className="mb-60 mt-28 md:my-48">
          <TransitionEffect duration={3} effect="scaleY">
            <h1 className="mx-9 font-poppins text-2xl font-bold md:mx-0 md:text-5xl">
              Ready To Build Your Community?
            </h1>
          </TransitionEffect>
          <TransitionEffect duration={3} delay={0.5} effect="scaleX">
            <a
              href="#0"
              className="mt-12 inline-flex items-center justify-center rounded-full border-[1px] border-none bg-pink px-10 py-3 text-xs font-bold text-white shadow-xl transition-all duration-500 hover:bg-lightPink hover:shadow-pink/40 md:px-24 md:py-6 md:text-xl"
            >
              Get Started For Free
            </a>
          </TransitionEffect>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default App;
