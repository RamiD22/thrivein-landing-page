import styles from './style';
import {Navbar, CTA, AboutUS, Footer, Hero, MissionVision, Team} from './components';


const App = () => (
    <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-gray-900 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>           
      </div>

      <div className={`bg-conic-to-l from-yellow-500 via-purple-500 to-blue-500 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <Hero/>
        </div>
      </div>

      <div className={`bg-rose-900	 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutUS/>
         
          
         
          </div>
      </div>
      <div className={`bg-amber-700	 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
       
        <MissionVision/>
        </div>
      </div>
      <div className={`bg-emerald-900	 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
       
        <CTA/>
        </div>
      </div>
      <div className={`bg-indigo-900	 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
       
        <Team/>
        </div>
      </div>
          <div className={`bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
       
          <Footer/>
        </div>
      </div>


    </div>
  )

export default App