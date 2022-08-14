import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import thrivephoto from "/Users/ramidjebari/Desktop/ThriveIN/THRIVELANDING/vite-project/src/assets/ThriveIN111.jpg"


const CTA = () =>(
  <section id="clients" className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Mission & Vision
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Bring down as many walls as we can that prevent creatives from creating. 
    We believe everyone should have an equal opportunity to be successful and 
    a major facet of this is encouraging people to not shelve their talents but to thrive!
    </p>

  
  </div>

  <div className={layout.sectionImg}>
    <img src={thrivephoto} alt="billing" className="w-[100%] h-[100%]" />
  </div>
</section>
);
export default CTA