import FirstSecClient from "../home-components/firstSecClient";
import AnnouncementClient from "../home-components/AnnouncementSection";
import style from "./styling.module.scss"
import FAQ from "../home-components/FAQS";
import About from "../home-components/about";
import MissionVision from "../home-components/MissionVision";
import ActiveAlertsSection from "../(user)/User-Main/user-home/user-alert/page";


export default function Home() {
  return (
    <>
    <main className="relative">
      <FirstSecClient/>
      <div className={`${style[`hr`]}`}></div>
      <div className="w-[80%] mx-auto">
        <ActiveAlertsSection/>
      </div>
      <div className={`${style[`hr`]}`}></div>
      <AnnouncementClient />
      <div className={`${style[`hr`]}`}></div>
      <FAQ/>
      <div className={`${style[`hr`]}`}></div>
      <About/>
      <div className={`${style[`hr`]}`}></div>
      <MissionVision/>
      </main>
    </>
  );
}
