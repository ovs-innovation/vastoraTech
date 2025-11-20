"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo, useCallback } from 'react';
import Slider from "react-slick";
import portfolio_data_2 from "@/data/portfolio-data-2";
import UnderlineSeven from "@/svg/underline_7";
import panel_icon from "@/assets/img/icon/panel-icon-3.png";

// project content data type
interface project_content_type {
    title: JSX.Element;
    title_2: JSX.Element;
    sm_info: string;
    sm_info_2: string;
}
// project content data
const project_content: project_content_type = {
    title: <>Our Handpicked <br /> <span> Projects <UnderlineSeven /> </span></>,
    title_2: <>Our Handpicked <br /> <span>Projects</span></>,
    sm_info: "We are committed to quality, reliability, and customer satisfaction in every project we undertake.",
    sm_info_2: "We are committed to quality, reliability, and customer satisfaction in every project we undertake.",
}
const {title, title_2, sm_info, sm_info_2}  = project_content

const chunkProjects = <T,>(items: T[], chunkSize: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < items.length; i += chunkSize) {
        chunks.push(items.slice(i, i + chunkSize));
    }
    return chunks;
};

const ProjectAreaHomeTwo = ({style}: any ) => { 
    const projectSlides = useMemo(() => chunkProjects(portfolio_data_2, 4), []);

    const normalizeIndex = useCallback((index: number) => {
      if (!projectSlides.length) return 0;
      return ((index % projectSlides.length) + projectSlides.length) % projectSlides.length;
    }, [projectSlides.length]);

    const getDefaultActiveId = useCallback((slideIndex: number) => {
      const normalized = normalizeIndex(slideIndex);
      const slideItems = projectSlides[normalized];
      if (!slideItems || !slideItems.length) return 0;
      return slideItems[2]?.id ?? slideItems[slideItems.length - 1]?.id ?? slideItems[0].id;
    }, [projectSlides, normalizeIndex]);

    const [active, setActive] = useState<number>(() => getDefaultActiveId(0));
    const handleToggle = (id: number): void => {
      setActive(id);
    };

    const sliderSettings = useMemo(() => ({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 800,
      dots: false,
      responsive: [
        { breakpoint: 992, settings: { dots: false } },
      ],
      beforeChange: (_: number, next: number) => {
        setActive(getDefaultActiveId(normalizeIndex(next)));
      },
    }), [getDefaultActiveId, normalizeIndex, projectSlides.length]);

    const [allActive, setAllActive] = useState<boolean>(false)

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 992) {
          setAllActive(true);
        } else {
          setAllActive(false);
        }
      };  
      // Initial check for window size on component mount
      handleResize();  
      // Attach event listener to update state on window resize
      window.addEventListener('resize', handleResize);
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);



    return (
      <> 
        <section className={`${style ? "project-area pt-110" : ""}`}>
          <div  className={`${style ? "project-5 pb-120 p-relative" : "project-area pt-105"} fix`}>
            <div className="container">
              {style ? 
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="tpsection-wrapper mb-20">
                        <h2 className="tpsection-title-two mb-65">{title_2}</h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="tp-panel-top mb-30">
                        <p>{sm_info_2}</p>
                        <div className="tp-panel-btn">
                          <Link className="light-blue-btn" href="/portfolio">View all Projects</Link>
                        </div>
                    </div>
                  </div>
              </div>
              :
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="tpsection-wrapper mb-20">
                      <h2 className="tpsection-title-two mb-65">{title}</h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="tp-panel-top mb-30">
                      <p>{sm_info}</p>
                      <div className="tp-panel-btn">
                        <Link className="green-btn" href="/portfolio">
                          View all Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              }
              <div className="project-slider-active">
                <Slider {...sliderSettings}>
                  {projectSlides.map((group, slideIndex) => (
                    <div key={`project-slide-${slideIndex}`}>
                      <div className="row-custom">
                        {group.map((item) => (
                          <div
                            key={item.id}
                            className={`col-custom ${item.id === active && !allActive ? "active" : ""} ${allActive ? "active" : ""}`}
                            onClick={() => handleToggle(item.id)}
                          >
                            <div className="tp-panel-item p-relative">
                              <div className="tp-panel-thumb">
                                <Image src={item.img} alt={item.title} />
                              </div>
                              <div className="tp-panel-content">
                                <div className="tp-panel-icon mb-15">
                                  <span>
                                    <Image src={panel_icon} alt="theme-pure" />
                                  </span>
                                </div>
                                <div className="tp-panel-text">
                                  <h4 className="tp-panel-title mb-15">
                                    <Link href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</Link>
                                  </h4>
                                  <ul className="tp-panel-meta">
                                    <li>{item.category}</li>
                                    {item.tags.slice(0, 1).map((tag) => (
                                      <li key={`${item.id}-${tag}`}>{tag}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default ProjectAreaHomeTwo;