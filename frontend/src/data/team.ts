// team avatar
import { StaticImageData } from "next/image";
import team_img_1 from "@/assets/img/team/team-1.jpg";
import team_img_2 from "@/assets/img/team/team-61.jpg";
import team_img_3 from "@/assets/img/team/team-3.jpg";
import team_img_4 from "@/assets/img/team/team-4.jpg";
import team_img_5 from "@/assets/img/team/team-5.jpg";
import team_img_6 from "@/assets/img/team/team-6.jpg";
import team_img_7 from "@/assets/img/team/team-8.jpeg";

// team data type
interface team_data_type {
    id: number;
    avatar: StaticImageData;
    cls: string;
    name: string;
    job_title: string;
    linkedin_id: string;
}

const team_data: team_data_type[] = [
    {
        id: 1,
        avatar: team_img_1,
        cls: "team-5-item-1",
        name: "Saurabh Singh Dhami",
        job_title: "Software Developer",
        linkedin_id: "https://www.linkedin.com/in/saurabh-singh-dhami-781919357/"
    },
    {
        id: 2,
        avatar: team_img_2,
        cls: "team-5-item-2",
        name: "Chanchal",
        job_title: "Marketing Manager",
        linkedin_id: "https://www.linkedin.com/in/chanchal-dhiman-153604359"
    },
    {
        id: 3,
        avatar: team_img_7,
        cls: "team-5-item-3",
        name: "Vaishnavi Srivastava",
        job_title: "Application Developer",
        linkedin_id: "https://www.linkedin.com/in/vaishnavi-srivastava-9a706425b/"
    },
    {
        id: 4,
        avatar: team_img_3,
        cls: "team-5-item-3",
        name: "Dristy Kumari",
        job_title: "Software Developer",
        linkedin_id: "https://www.linkedin.com/in/dristy-kumari-65952a250/"
    },
    {
        id: 5,
        avatar: team_img_4,
        cls: "team-5-item-4",
        name: "Rohit Sharma",
        job_title: "Software Developer",
        linkedin_id: "https://www.linkedin.com/in/rohit-sharma-917017309/"
    },
    {
        id: 6,
        avatar: team_img_5,
        cls: "team-5-item-5",
        name: "Mohit Rawat",
        job_title: "Video Editor",
        linkedin_id: "https://www.linkedin.com/in/mohit-rajput-243a59388/"
    },
    {
        id: 7,
        avatar: team_img_6,
        cls: "team-5-item-6",
        name: "Vansh Kumar Kesarwani",
        job_title: "Software Developer",
        linkedin_id: "https://www.linkedin.com/in/vansh-kumar-kesarwani/"
    }

];

export default team_data;
