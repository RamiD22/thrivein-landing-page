import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import aboutpic from "/Users/ramidjebari/Desktop/ThriveIN/THRIVELANDING/vite-project/src/assets/ThriveIN110.jpg"
const MissionVision = () => (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={aboutpic} alt="aboutpic" className="w-[100%] h-[60%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Us
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Since its inception, Thrive Collective has showcased hundreds of singers, fashion designers, 
      filmmakers and artists and has featured talks with over 90 professionals across various industries.<br/> <br/>
      We are dedicated to supporting the creative industry through showcases, our network, education 
      and building an eco system that would allow them to grow in the industry. Our network consists 
      of key influencers, governments, industry professionals, institutions, agencies and celebrities 
      both regionally and globally. Our community is credible and dedicated to supporting other “Thrivers”, 
      from those starting their creative journey to Grammy Award winners and industry executives.
      </p>

      
    </div>
  </section>
);

export default MissionVision