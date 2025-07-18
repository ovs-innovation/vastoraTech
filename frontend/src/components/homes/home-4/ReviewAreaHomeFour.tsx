
// review user logo 
import Image, { StaticImageData } from "next/image";
import review_user_logo_1 from "@/assets/img/brand/brand10.png";
import review_user_logo_2 from "@/assets/img/brand/brand11.png";
import review_user_logo_3 from "@/assets/img/brand/brand12.png";


// review data type
interface review_data_type  {
    id: number;
    cls: string;
    img: StaticImageData;
    review_text: string;
}
// review content 
const review_data: review_data_type[] = [
    {
      id: 1,
      cls: "",
      img: review_user_logo_1,
      review_text: "5 out of 5 stars from 1,020 reviews",
    },
    {
      id: 2,
      cls: "review-side-border",
      img: review_user_logo_2,
      review_text: "4.9 out of 5 stars from 1,045 reviews",
    },
    {
      id: 3,
      cls: "",
      img: review_user_logo_3,
      review_text: "4.5 out of 5 stars from 1,015 reviews",
    },
  ];

  type style_type = {
    style?: any,
    service_style?: any
  }

const ReviewAreaHomeFour = ({style, service_style}: style_type) => {

    return (
        <> 
        <section>
            <div className={`review-area tpreview-4 ${style ? "pb-50" : "pb-105"}`}>
                <div className="container">
                    <div className={`${style ? "" : "tpreview-4-wrapper pb-30 mb-30 pt-55"} ${service_style? "pb-30 mb-30 pt-55" : ""}`}>
                        <div className="row">
                            {review_data.map((item, i)  => 
                                <div key={i} className="col-lg-4 col-md-6">
                                    <div className={`tpreview-4 ${item.cls} text-center mb-30`}>
                                        <div className="tpreview-4-icon mb-15">
                                        <Image src={item.img} alt="theme-pure" className="w-50 h-50" />
                                        </div>
                                        <div className="tpreview-4-content">
                                        <p>{item.review_text}</p>
                                        <div className="review-star">
                                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{' '}
                                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{' '}
                                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{' '}
                                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{' '}
                                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{' '}
                                        </div>
                                        </div>
                                    </div>
                                </div>                        
                            )} 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ReviewAreaHomeFour;