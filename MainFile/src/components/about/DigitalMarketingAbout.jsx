import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "@/plugins";
import Link from "next/link.js";
import About31 from "../../../public/assets/imgs/about/3/ideon5502.png";
import Image from "next/image.js";

gsap.registerPlugin(ScrollSmoother);

const DigitalMarketingAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="about__area-3">
        <div className="container pt-140 pb-110">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="about__img-3">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={About31}
                  alt="About Thumbnail"
                  data-speed="auto"
                  className="smootherReset768"
                />
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">HAKKIMIZDA</h2>
                <h3 className="sec-title title-anim">
                 Dijital Dünyada Güvenilir Çözüm Ortağınız
                </h3>
              </div>
              <div className="sec-text-wrapper">
                <div className="sec-text text-anim">
                  <p>
                    İdeon, dijital dünyada başarıya giden yolda rehberinizdir.
                    Yaratıcı çözümlerimiz ve deneyimli ekibimizle,
                    müşterilerimize en iyi hizmeti sunmayı hedefliyoruz. Her
                    projede tutkuyla çalışıyor, markaların dijital varlıklarını
                    güçlendiriyoruz. İşte İdeon ile tanışın, dijital dönüşüm
                    yolculuğunuzda yanınızda olduğumuzu görün!
                  </p>
                  <div className="btn_wrapper">
                    <Link
                      className="wc-btn-light btn-hover btn-item"
                      href="/about"
                    >
                      <span></span>İletişime Geçin{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingAbout;
