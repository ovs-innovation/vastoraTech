
// team avatar 
import { StaticImageData } from "next/image";
import team_img_1 from "@/assets/img/team/team1.jpeg";
import team_img_2 from "@/assets/img/team/team2.jpeg";
import team_img_3 from "@/assets/img/team/team4.jpg";
import team_img_4 from "@/assets/img/team/team3.jpg";
import team_img_5 from "@/assets/img/team/team-5.jpg";
import team_img_6 from "@/assets/img/team/team-6.jpg";
import team_img_7 from "@/assets/img/team/team-7.jpg";
import team_img_8 from "@/assets/img/team/team-8.jpg";
import team_img_9 from "@/assets/img/team/team-9.jpg"


// team data type
interface team_data_type {
    id: number;
    avatar: StaticImageData;
    cls: string;
    name: string;
    job_title: string;
}

const team_data: team_data_type[] = [
    {
        id: 1,
        avatar: team_img_1,
        cls: "",
        name: "Shashank Tripathi",
        job_title: "Founder & CEO",
    },
    {
        id: 2,
        avatar: team_img_2,
        cls: "team-5-item-2",
        name: "Angad Kumar",
        job_title: "Full Stack Developer",
    },
    {
        id: 3,
        avatar: team_img_3,
        cls: "team-5-item-3",
        name: "Shushmita Roy",
        job_title: "Frontend Developer",
    },
    // {
    //     id: 4,
    //     avatar: team_img_4,
    //     cls: "team-5-item-4",
    //     name: "Jyoti Agrawal",
    //     job_title: "UI/UX Designer",
    // },
    {
        id: 5,
        avatar: team_img_5,
        cls: "team-5-item-5",
        name: "Rahul Roy",
        job_title: "Full Stack Developer",
    },
    {
        id: 6,
        avatar: team_img_6,
        cls: "team-5-item-6",
        name: "Shivangi Thakur",
        job_title: "Digital Marketing Manager",
    },
    {
        id: 7,
        avatar: team_img_7,
        cls: "team-5-item-7",
        name: "Arti Kumari",
        job_title: "Frontend Developer",
    },
    {
        id: 8,
        avatar: team_img_8,
        cls: "team-5-item-8",
        name: "Priyanka Singh",
        job_title: "SEO Manager",
    },
    // {
    //     id: 9,
    //     avatar: team_img_9,
    //     cls: "team-5-item-8",
    //     name: "Kajal Massey",
    //     job_title: "Full Stack Developer",
    // },

]

export default team_data