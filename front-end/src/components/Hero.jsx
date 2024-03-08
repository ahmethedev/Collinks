import styles from "../style";
import { discount, robot } from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            No more <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Endless</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Tabs.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Are you tired of drowning in a sea of open browser tabs, never quite getting around to reading the articles and resources you've saved for later? <span className="text-gradient">Collinks</span>{" "} is here to revolutionize the way you manage online content. Designed by professionals for professionals, Collinks is your personal assistant for conquering information overload and reclaiming your time.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      {/* TODO */}
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
     
      </div>
    </section>
  );
};

export default Hero;
