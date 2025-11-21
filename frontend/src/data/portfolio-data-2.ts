import { StaticImageData } from "next/image";
import portfolio_img_1 from "@/assets/img/portfolio/project-portfolio-1.png";
import portfolio_img_2 from "@/assets/img/portfolio/project-portfolio-2.png";
import portfolio_img_3 from "@/assets/img/portfolio/project-portfolio-3.png";
import portfolio_img_4 from "@/assets/img/portfolio/project-portfolio-4.png";
import portfolio_img_5 from "@/assets/img/portfolio/project-portfolio-5.png";
import portfolio_img_6 from "@/assets/img/portfolio/project-portfolio-6.png";
// import portfolio_img_7 from "@/assets/img/portfolio/project-portfolio-7.png";
import portfolio_img_8 from "@/assets/img/portfolio/project-portfolio-8.png";
import portfolio_img_9 from "@/assets/img/portfolio/project-portfolio-9.png";
import portfolio_img_10 from "@/assets/img/portfolio/project-portfolio-10.png";
import mobile_img_1 from "@/assets/img/portfolio/mob1.png";
import mobile_img_2 from "@/assets/img/portfolio/mob2.png";
import mobile_img_3 from "@/assets/img/portfolio/mob3.png";
import mobile_img_4 from "@/assets/img/portfolio/mob4.png";
import mobile_img_5 from "@/assets/img/portfolio/mob5.png";
import mobile_img_6 from "@/assets/img/portfolio/mob6.png";
import mobile_img_8 from "@/assets/img/portfolio/mob8.png";
import mobile_img_9 from "@/assets/img/portfolio/mob9.png";
import mobile_img_10 from "@/assets/img/portfolio/mob10.png";


interface portfolio_data_2_type {
    id: number;
    img: StaticImageData;
    mobileImg: StaticImageData;
    category: string,
    title: string;
    sm_des: string;
    link: string;
    tags: string[];
}

const portfolio_data_2: portfolio_data_2_type[] = [
    {
        id: 1, 
        img: portfolio_img_1,
        mobileImg: mobile_img_1,
        category: "E-commerce", 
        title: "TossMart",
        sm_des: "Tossmart offers eCommerce services with smart gadgets, electronics, and a smooth online shopping experience.",
        link: "https://tossmart.com/",
        tags: ["E-commerce", "Online Shopping"]
    },
    {
        id: 2, 
        img: portfolio_img_2,
        mobileImg: mobile_img_2,
        category: "Beauty",
        title: "CandyFloss",
        sm_des: "The website offers personalized salon services tailored to each client's needs and features testimonials from satisfied customers.",
        link: "https://candyflossbeautypalace.com/",
        tags: ["Beauty", "Personalized Services"]
    },
    {
        id: 3, 
        img: portfolio_img_3,
        mobileImg: mobile_img_3,
        category: "E-learning",
        title: "The Learn Skills",
        sm_des: "The website “The Learn Skills” offers various educational resources, courses, and training to help individuals gain new skills.",
        link: "https://thelearnskills.com/",
        tags: ["E-learning", "Online Courses"]
    },
    {
        id: 4, 
        img: portfolio_img_4,
        mobileImg: mobile_img_4,
        category: "Hotel Booking",
        title: "Hotel Sweet Dreams",
        sm_des: "Hotel Sweet Dreams offers hotel and banquet booking services with personalized experiences and customer satisfaction focus.",
        link: "https://hotelsweetdreams.ovsinnovation.com/",
        tags: ["Hotel Booking", "Banquet Booking"]
    },
    {
        id: 5, 
        img: portfolio_img_5,
        mobileImg: mobile_img_5,
        category: "Travel",
        title: "Arana Taj Tour",
        sm_des: "Arana Taj Tour offers curated travel packages focused on Indian destinations like Agra, Delhi, Jaipur, and Varanasi.",
        link: "https://aranatajtour.com/",
        tags: ["Travel", "Tour Packages"]
    },
    {
        id: 6, 
        img: portfolio_img_6,
        mobileImg: mobile_img_6,
        category: "Real Estate",
        title: "Prosperra Infra Estate",
        sm_des: "Prosperra Infra Estate offers real estate solutions, specializing in commercial and residential properties across India.",
        link: "https://prosperrainfra.com/",
        tags: ["Real Estate", "Commercial Properties"]
    },
    // {
    //     id: 7, 
    //     img: portfolio_img_7,
    //     mobileImg: portfolio_mobile_dummy,
    //     category: "E-commerce",
    //     title: "Botso",
    //     sm_des: "Botso.in is an e-commerce site offering electronic products, mainly cameras and accessories, with easy online shopping.",
    //     link: "https://botso.in/",
    //     tags: ["E-commerce", "Electronic Products"]
    // },  
    {
        id: 8, 
        img: portfolio_img_8,
        mobileImg: mobile_img_8,
        category: "Engineering",
        title: "Divizz Group",
        sm_des: "Divizz Group offers services across civil engineering, design, property valuation, and business consulting through its website.",
        link: "https://divizz.com/",
        tags: ["Civil Engineering", "Design"]
    }, 
    {
        id: 9, 
        img: portfolio_img_9,
        mobileImg: mobile_img_9,
        category: "Engineering",
        title: "PowerQ",
        sm_des: "PowerQ offers Test and Tag services in Melbourne, ensuring business electrical safety with reliable testing and certification.",
        link: "https://powerq.com.au/",
        tags: ["Test and Tag", "Electrical Safety"]
    }, 
    {
        id: 10, 
        img: portfolio_img_10,
        mobileImg: mobile_img_10,
        category: "Health",
        title: "Health&Herbs",
        sm_des: "Health&Herbs offers health consulting, herbal wellness, natural remedies, and holistic lifestyle solutions through its website.",
        link: "https://healthnherbs.in/",
        tags: ["Health Consulting", "Herbal Wellness"]
    },
]
export default portfolio_data_2