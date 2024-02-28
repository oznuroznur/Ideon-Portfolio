import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link.js";
import ArrowDownBig from "../../../public/assets/imgs/icon/arrow-down-big.png";
import Hero1bg from "../../../public/assets/imgs/hero/bg-leon.jpg";
import Image from "next/image.js";


const DigitalAgencyHero = () => {
    
  return (
    <>
        <section className="hero__area-leon" >
           <div className="animation__hero_one">
            <div className="">
            <Image
                priority
                layout="responsive"
                objectFit="cover"
                src={Hero1bg}
                alt="Digital Agency Background"
                className="hero1_bg_leon"
            />
            </div>
            </div>
      </section>
    </>
  );
};

export default DigitalAgencyHero;
