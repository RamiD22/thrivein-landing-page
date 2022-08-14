import React from 'react'

import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

import ramipp from "/Users/ramidjebari/Desktop/ThriveIN/THRIVELANDING/vite-project/src/assets/Ramipp.jpeg"
import ethanpp from "/Users/ramidjebari/Desktop/ThriveIN/THRIVELANDING/vite-project/src/assets/ethanA.jpg"
import janepp from "/Users/ramidjebari/Desktop/ThriveIN/THRIVELANDING/vite-project/src/assets/JaneOwen.jpeg"

const Team = () => (
  <section id="team" className={layout.sectionReverse}>
  <div class="container mx-auto px-6 md:px-12">
   <div className="text-center">
    <h2 className={styles.heading2}>
      Leadership
    </h2>
    <br/><br/><br/>
  </div>

  <div class="grid gap-24 md:grid-cols-3 md:gap-12">
    <div class="group space-y-4 text-center">
      <div
        class="mx-auto h-56 w-56 rotate-45 overflow-hidden rounded-[4rem] md:h-40 md:w-40 lg:h-56 lg:w-56"
      >
        <img
          class="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
          src={ethanpp}
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
      </div>
      <div class="pt-4">
        <h4 className={`${styles.paragraph} max-w-[470px] mt-5`}>Ethan Auguste</h4>
        <span class="block text-sm text-gray-500">CEO-Founder</span>
      </div>
     
    </div>
    <div class="group space-y-4 text-center">
      <div
        class="mx-auto h-56 w-56 rotate-45 overflow-hidden rounded-[4rem] md:h-40 md:w-40 lg:h-56 lg:w-56"
      >
        <img
          class="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
          src={janepp}
          alt="man"
          loading="lazy"
          width="1000"
          height="667"
        />
      </div>
      <div class="pt-4">
        <h4 className={`${styles.paragraph} max-w-[470px] mt-5`}>Jane Owen</h4>
        <span class="block text-sm text-gray-500">CMO & Director of International Events and PR</span>
      </div>
      
    </div>
    <div class="group space-y-4 text-center">
      <div
        class="mx-auto h-56 w-56 rotate-45 overflow-hidden rounded-[4rem] md:h-40 md:w-40 lg:h-56 lg:w-56"
      >
        <img
          class="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
          src={ramipp}
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
      </div>
      <div class="pt-4">
        <h4 className={`${styles.paragraph} max-w-[470px] mt-5`}>Rami Djebari </h4>
        <span class="block text-sm text-gray-500">CTO-Co-Founder</span>
      </div>
      
    </div>
  </div>
</div>
</section>
  )


export default Team