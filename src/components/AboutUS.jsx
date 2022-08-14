import {features } from '../constants';
import styles, {layout} from '../style';
import Button from './Button.jsx'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const AboutUS = () => (
  <section id="features" className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Features 
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    An web3 platform that allows you to discover, 
    showcase, connect and collaborate with creatives, models and influencers. <br/><br/>

Each user on the platform will be able to create a detailed profile specific to their industry with all their essential information, 
integrations, and features needed to get collaborations or hired.
    </p>

  </div>

  <div className={`${layout.sectionImg} flex-col`}>
    {features.map((feature, index) => (
      <FeatureCard key={feature.id} {...feature} index={index} />
    ))}
  </div>
</section>
  );


export default AboutUS