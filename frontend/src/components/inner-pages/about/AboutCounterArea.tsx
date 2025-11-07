 
import Image, { StaticImageData } from "next/image"; 
import counter_shape_1 from "@/assets/img/shape/counter-shape-1.png";
import counter_shape_2 from "@/assets/img/shape/counter-shape-2.png";
import counter_shape_3 from "@/assets/img/shape/counter-shape-3.png";
import Count from "@/components/common/count";

type about_content_type = {
    id: number,
    cls: string,
    img: StaticImageData,
    count_number: number ,
    info: JSX.Element,
}
 const about_counter: about_content_type[] = [
    {
        id: 1,
        cls: "",
        img: counter_shape_1,
        count_number: 10,
        info: <>Years <br /> Of Experience</>,
    },
    {
        id: 2,
        cls: "",
        img: counter_shape_2,
        count_number: 2000,
        info: <>Successful Projects <br /> Delivered</>,
    },
    {
        id: 3,
        cls: "",
        img: counter_shape_3,
        count_number: 1900,
        info: <>Happy <br /> Clients</>,
    },
    {
        id: 4,
        cls: "",
        img: counter_shape_1,
        count_number: 50,
        info: <>Team <br /> Members</>,
    },
]

const AboutCounterArea = () => {
    return (
        <>
            <div className="counter-area pb-120">
                <div className="container">
                    <div className="counter-border">
                        <div className="row">
                            {about_counter.map((item, i) => 
                                <div key={i} className="col-lg-3 col-md-6">
                                    <div className={`inner-counter ${item.cls}`}>
                                        <div className={`inner-counter-shape inner-counter-shape-${item.id}`}>
                                            <Image src={item.img} alt="theme-pure" />
                                        </div>
                                        <div className="inner-counter-count d-flex align-items-center">
                                        <div className="inner-counter-list">
                                            <span data-purecounter-duration="1" data-purecounter-end={item.count_number} className="purecounter">
                                                <Count number={item.count_number} />
                                            </span> 
                                        </div>
                                        <div className="inner-counter-info">
                                            <span>{item.info}</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>                            
                            )} 
                        </div>
                    </div>
                </div>
            </div>
            {/* Vision/Value Statement */}
            <div className="counter-area-vision-text pb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <p style={{fontSize: '1.22rem', fontWeight: 500, color: '#525263', margin: 0, lineHeight: 1.6}}>
                                Vastorate is driven by the vision to empower businesses through digital innovation. We deliver ready-to-deploy solutions and foster the spirit of technology-driven growth. Our expertise, agility, and client-first approach turn today's ambitions into tomorrow's achievements—helping entrepreneurs and enterprises scale with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutCounterArea;