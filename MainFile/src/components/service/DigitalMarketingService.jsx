import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
  const serviceList = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      imageAnimation(serviceList.current.children);
      let tHero = gsap.context(() => {
        let service__items_3 = gsap.utils.toArray(".service_animation");
        let service__items_heading = gsap.utils.toArray(
          ".service_animation h3"
        );
        let service__items_content = gsap.utils.toArray(
          ".service_animation .service__content-3"
        );

        service__items_3.forEach((service_item, i) => {
          gsap.set([service__items_heading[i], service__items_content[i]], {
            x: -30,
            opacity: 0,
          });

          let service3_timeline = gsap.timeline({
            scrollTrigger: {
              trigger: service_item,
              start: "top center+=200",
              markers: false,
            },
          });

          service3_timeline.to(service__items_heading[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
              each: 0.2,
            },
          });
          service3_timeline.to(
            service__items_content[i],
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              stagger: {
                each: 0.2,
              },
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);

  const imageAnimation = (data) => {
    function followImageCursor(event, serviceImgItem) {
      const contentBox = serviceImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    for (let i = 0; i < data.length; i++) {
      data[i].addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, data[i]), 1000);
      });
    }
  };

  return (
    <>
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 text-anim">
                <h2 className="sec-sub-title title-anim">Portföy</h2>
                <h3 className="sec-title title-anim">
                  Sektörel <br /> Portfolyomuz
                </h3>
                <p>
                  İdeon olarak, çeşitli sektörlerden müşterilere sunduğumuz
                  çözümlerle gurur duyuyoruz. E-ticaretten sağlık sektörüne,
                  finanstan eğitim alanına kadar geniş bir yelpazede projeler
                  gerçekleştirdik. Her bir projede, müşterilerimizin
                  ihtiyaçlarını anlamak ve sektörel dinamiklere uygun çözümler
                  sunmak için titizlikle çalıştık. Sektörel portfolyomuz,
                  başarılı işbirliklerimizin bir yansımasıdır ve gelecekte de
                  farklı sektörlerde daha pek çok projeye imza atmaya hazırız.
                  Sizin için değişen ve gelişen her sektörde yanınızdayız.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3" ref={serviceList}>
                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/" className="service__title-3 ">
                    Web ve <br/>
                    Mobil Uygulama
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Domain, hosting, SSL gibi temel ihtiyaçlarınızdan başlayarak hızlı teslim web siteleri, mobil uygulama geliştirme, sanal sunucu çözümleri ve Microsoft Office gibi kurumsal yazılımlara kadar geniş bir yelpazede hizmet sunuyoruz.
                    </p>
                    <ul className="">
                      <li>+ Hızlı Teslim Web Sitesi ve Mobil Uygulama</li>
                      <li>+ Full-Stack Development</li>
                      <li>+ Domain, Hosting; Bireysel, Kurumsal</li>
                      <li>+ SSL</li>
                      <li>+ Sanal Sunucu; Cloud, Vps, Vds</li>
                      <li>+ E-Ticaret</li>
                      <li>+ Özel ve Web Yazılımlar</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> İletişime Geçin
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/about/3/ideon550.png)",
                    }}
                  ></div>
                </div>
                

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link href="/" className="service__title-3">
                    Grafik ve Tasarım
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Kurumsal kimlik, UX/UI tasarımı, logo, menü ve video animasyonları gibi geniş bir yelpazede hizmet sunuyoruz. Ayrıca, markalaşma ve ürün tasarımı konularında da uzmanız. Sunumlarınızı ve infografiklerinizi görsel olarak güçlendiriyoruz. 
                    </p>
                    <ul className="">
                      <li>+ UX / UI</li>
                      <li>+  Logo</li>
                      <li>+ Menü</li>
                      <li>+ Video Animasyon</li>
                      <li>+ Sunum ve İnfografik</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> İletişime Geçin
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/about/3/ideon550.png)",
                    }}
                  ></div>
                </div>
                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/" className="service__title-3">
                      Arama Motoru <br/>
                      Optimizasyonu <br/>
                      (SEO)
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    SEO stratejilerimizle web sitenizi üst sıralara taşıyoruz! Hedef kitlenizin dikkatini çekin, daha fazla ziyaretçi ve müşteri kazanın.
                    </p>
                    <ul className="">
                      <li>+ Logo Design</li>
                      <li>+ Advertisement</li>
                      <li>+ Promotion</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> İletişime Geçin
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/about/3/ideon550.png)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link href="/" className="service__title-3">
                    Bakım Altyapı 
                      <br />
                      Teknik Destek
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Altyapınızı güçlendirin! Sunucu, veri depolama, güvenlik ve network çözümleriyle size destek oluyoruz.
                    </p>
                    <ul className="">
                      <li>+ Sunucu Çözümleri</li>
                      <li>+ Veri Depolama ve Yedekleme Çözümleri</li>
                      <li>+ Network Çözümleri</li>
                      <li>+ Güvenlik Çözümleri</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> İletişime Geçin
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/about/3/ideon550.png)",
                    }}
                  ></div>
                </div>

                <div className="service3__img-wrap">
                  <div className="service3__img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;
