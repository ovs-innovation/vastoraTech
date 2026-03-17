import { StaticImageData } from "next/image";
import RightArrowMenu from "@/svg/home-1/RightArrowMenu";
import service_demo_1 from "@/assets/img/header-icon/web.png";
import service_demo_2 from "@/assets/img/header-icon/mobile.png";
import service_demo_3 from "@/assets/img/header-icon/building.png";
import service_demo_4 from "@/assets/img/header-icon/media.png";
import service_demo_5 from "@/assets/img/header-icon/keyword.png";
import service_demo_6 from "@/assets/img/header-icon/ui-ux.png";
import service_demo_7 from "@/assets/img/header-icon/box.png";

import menu_banner from "@/assets/img/header-icon/header-banner/header-banner-1.png";
 
// type MenuData =  
interface menu_data_type  {
  id: number;
  title: string;
  link: string;
  has_dropdown?: boolean;
  has_megamenu?: boolean;  
  img_dropdown?: boolean;  
  service_dropdown?: boolean;  
  blog_dropdown?: boolean;  
  sub_menus?: {
      link?: string | any;
      title?: string;
      demo_img?: StaticImageData | any ; 
      layout?: {
        link: string;
        title: string;
      }[];
  }[];
  banner_sub_title?: string;
  banner_title?: JSX.Element;
  inner_title?: string;
  icon?: JSX.Element;
  m_banner?: StaticImageData;
}

// menu data 
const menu_data: menu_data_type[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
    img_dropdown: true,
  },
  {
    id: 2,
    title: "About",    
    link: "/about",
    has_dropdown: false, 
  },
  {
    id: 3,
    title: "Services",
    link: "#",
    has_dropdown: true,
    service_dropdown: true,
    inner_title: "Services Overview",
    sub_menus: [
      { link: "/services/web-development-services",           title: "Web Development",         demo_img: service_demo_1,  },
      { link: "/service/mobile-app-development-services",    title: "Mobile App Development",   demo_img: service_demo_2,  },
      { link: "/service/social-media-marketing-services",    title: "Social Media Marketing",   demo_img: service_demo_4,  },


      // { link: "/service/digital-marketing",         title: "Digital Marketing",        demo_img: service_demo_3,  },
      { link: "/service/seo-services",         title: "SEO Services",        demo_img: service_demo_5,  },
      { link: "/product/e-commerce-solutions", title: "E-commerce Solutions", demo_img: service_demo_7,  },
      // { link: "/service/ui-ux-design", title: "UI/UX Design",        demo_img: service_demo_6,  },
   
    ],
    banner_sub_title: "Software Development & Digital Marketing Agency",
    banner_title: <>The #1 Software <br/> Development and Digital Marketing Agency <br /> for fast growing  companies.</>,
    icon: <RightArrowMenu />,
    m_banner: menu_banner,
  },
  {
    id: 4,
    title: "E-commerce Solutions",    
    link: "/product/e-commerce-solutions",
    has_dropdown: false, 
  },
  {
    id: 5,
    title: "Projects",    
    link: "/portfolio",
    has_dropdown: false, 
  },
  {
    id: 6,
    title: "Blog",
    link: "/blog",
    has_dropdown: false,
  },
  {
    id: 7,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,     
  },  
];
export default menu_data;
