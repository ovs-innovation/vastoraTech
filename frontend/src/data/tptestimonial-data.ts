
import { StaticImageData } from "next/image";
import testimonial_img_1 from "@/assets/img/team/testimonial-4-shape-1.png";
import testimonial_img_2 from "@/assets/img/team/testimonial-4-shape-2.png";  

// testimonial data type
interface testimonial_data_type {
    id: number;
    img: StaticImageData;
    info: string;
    avatar_name: string;
    job_title: string;
}
// testimonial data 
const testimonial_data: testimonial_data_type[] =  [
    {
        id: 1,
        img: testimonial_img_1,
        info: "Vastora Tech has been a reliable technology partner for us. They understood our business structure and delivered a system that actually improved our day-to-day operations. Their team communicates clearly, meets deadlines, and provides proper post-delivery support. We appreciate their consistency and professionalism.",
        avatar_name: "Dimple Singh",
        job_title: "CEO, The Learn Skills",
    },
    {
        id: 2,
        img: testimonial_img_2,
        info: "We approached Vastora Tech for website development and digital support. The team took time to understand our brand and delivered a clean, functional website without unnecessary delays. What we liked most was their availability whenever we needed changes or assistance. A dependable team to work with.",
        avatar_name: "Abharam Retreats Team",
        job_title: "Founder, Abharam Retreats",
    },
    {
        id: 3,
        img: testimonial_img_1,
        info: "Our e-commerce store was developed by Vastora Tech, and the overall experience was smooth. They handled product setup, structure, speed optimization and provided us with clear training on how to manage the store. The website performance has improved our customer engagement noticeably.",
        avatar_name: "Shivesh Dixit",
        job_title: "Founder, Toss Mart",
    },
    {
        id: 4,
        img: testimonial_img_2,
        info: "We collaborated with Vastora Tech for software development. The project was executed step-by-step with proper documentation, regular updates, and logical suggestions from their side. Their team is technically strong and easy to communicate with. We are satisfied with the final product.",
        avatar_name: "Priya Nagwani",
        job_title: "Founder, Prosperra",
    },
    {
        id: 5,
        img: testimonial_img_1,
        info: "Our experience with Vastora Tech has been positive. They developed a system that aligns with our operational needs and made sure the interface was simple for our team to use. Support response time is good and the overall service quality matches what we were expecting.",
        avatar_name: "Bobby",
        job_title: "Founder    , Power Q",
    },
]
export default testimonial_data