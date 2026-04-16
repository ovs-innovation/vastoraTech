import Link from "next/link";


interface social_links_type {
  link: string;
  target: string;
  icon: string;
  name: string;
}


const social_links: social_links_type[] = [
  {
    link: "https://www.linkedin.com/in",
    target: "_blank",
    icon: "fab fa-linkedin-in",
    name: "LinkedIn",
  },
  {
    link: "https://www.instagram.com/vastoratech/",
    target: "_blank",
    icon: "fab fa-instagram",
    name: "Instagram",
  },
  {
    link: "https://www.youtube.com/@VastoraTech",
    target: "_blank",
    icon: "fab fa-youtube",
    name: "YouTube",
  },
  {
    link: "https://in.pinterest.com/vastorat/",
    target: "_blank",
    icon: "fab fa-pinterest-p",
    name: "Pinterest",
  },
  {
    link: "https://www.facebook.com/profile.php?id=61578752105209",
    target: "_blank",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "https://x.com/Vastora_tech",
    target: "_blank",
    icon: "fab fa-twitter",
    name: "Twitter",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          target={l.target ? l.target : ""}
          aria-label={l.name}
        >
          <i className={l.icon} aria-hidden="true"></i> {' '}
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;




interface social_links_type_2 {
  link: string;
  color: string;
  icon: string;
  name: string;
}


const social_links_2: social_links_type_2[] = [
  {
    link: "https://www.linkedin.com/in",
    color: "footer-linkedin",
    icon: "fa-brands fa-linkedin-in",
    name: "LinkedIn",
  },
  {
    link: "https://www.instagram.com/vastoratech/",
    color: "footer-insta",
    icon: "fa-brands fa-instagram",
    name: "Instagram",
  },
  {
    link: "https://www.youtube.com/@VastoraTech",
    color: "",
    icon: "fa-brands fa-youtube",
    name: "YouTube",
  },
  {
    link: "https://in.pinterest.com/vastorat/",
    color: "",
    icon: "fa-brands fa-pinterest-p",
    name: "Pinterest",
  },
  {
    link: "https://www.facebook.com/profile.php?id=61578752105209",
    color: "footer-facebook",
    icon: "fa-brands fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "https://x.com/Vastora_tech",
    color: "",
    icon: "fa-brands fa-twitter",
    name: "Twitter",
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_2.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className={link.color}
          target="_blank"
          aria-label={link.name}
        >
          <i className={link.icon} aria-hidden="true"></i>{" "}
        </Link>
      ))}
    </>
  );
};


 

// team social links
interface team_social_links_type {
  id: number;
  link: string;
  icon: string;
}
const team_social_data = [
  {
    id: 1, 
    link:"https://www.facebook.com/profile.php?id=61578752105209",
    icon: "fa-brands fa-facebook-f",
    name: "Facebook",
  },
  {
    id: 2, 
    link:"https://x.com/Vastora_tech",
    icon: "fa-brands fa-twitter",
    name: "Twitter",
  },
  {
    id: 3, 
    link:"https://www.linkedin.com/in",
    icon: "fa-brands fa-linkedin-in",
    name: "LinkedIn",
  },
]

export const TeamSocialLinks = () => {
  return (
    <>
      {team_social_data.map((t_item, t_index) => (
        <Link
          key={t_index}
          href={t_item.link} 
          target="_blank"
          aria-label={t_item.name}
        >
          <i className={t_item.icon} aria-hidden="true"></i>{" "}
        </Link>
      ))}
    </>
  )
}


// copy right text 
type copy_right_text_type =  {
  copy_right: JSX.Element;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <> ©{new Date().getFullYear()} Copyrights by Vastora Tech. All Rights Reserved. Designed by 
                  <Link target="_blank" href="https://vastoratech.com"> Vastora Tech. </Link> 
              </>,
}

const {copy_right}  = copy_right_text
export const CopyRight = ()  => {
  return (
    <> {copy_right}</>
  )
}


