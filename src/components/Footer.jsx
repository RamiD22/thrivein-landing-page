import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import thrivein_logo from "/Users/ramidjebari/Desktop/ThriveIN/THRIVELANDING/vite-project/src/assets/thrivein_logo.png"


const Footer = () =>  (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={thrivein_logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
        The Social Platform For Creatives on web3
        </p>
      </div>

      
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 ThriveIN. All Rights Reserved.
      </p>

      
    </div>
  </section>
);

export default Footer