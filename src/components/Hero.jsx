import styles from '../style';
import {discount,robot} from '../assets';
import thrivein_mockup from "/Users/ramidjebari/Desktop/ThriveIN/THRIVELANDING/vite-project/src/assets/thriveinmockup.png"
import Button from './Button.jsx';
const url = "http://eepurl.com/h7MkEX"
const Hero = () => (
  
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenterStart} flex-col xl:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The  <br className="sm:block hidden" />{" "} 
            <span className="text-gradient">Social Platform</span>{" "}
          </h1>
          
        </div>
        <h1 className="font-poppins font-semibold ss:text-[58px] text-[42px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          For {" "}
          <span className="text-gradient ">Creatives</span>
        </h1>
        
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Be part of the next generation of creators. Create and get rewarded thanks to the Blockchain
        </p>
        <br/>

        <div className="ss:flex hidden md:mr-4 mr-0"> 
        <button
              type="button"
              onClick={() => window.open(url, '_blank')} 
              className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            >
                Join the waitlist!
             
            </button>
          </div>

        

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={thrivein_mockup} alt="mockup" className="object-fill h-300 w-300" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  )


export default Hero