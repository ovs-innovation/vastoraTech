

import LocationIconContact from "@/svg/contact_icon/LocationIconContact";
const google_map_link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28029.235959811875!2d77.36680300000003!3d28.580136000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x81c7d17f374edabb%3A0xed66ff7a40389b8a!2sOVS%20Innovation!5e0!3m2!1sen!2sus!4v1753181193525!5m2!1sen!2sus"
type google_map_content_type = {
    sub_title: string;
    title: string;
    locations: {
        id: number;
        icon: JSX.Element;
        country: string;
        address: string;
        address_link: string;
    }[];
}
 const google_map_content: google_map_content_type = {
    sub_title: "OUR OFFICE",
    title: "Visit our office in India",
    locations: [
        {
            id: 1, 
            icon: <LocationIconContact />,
            country: "Noida Sector-51, India",
            address: "2nd Floor, JS Acade, 203, above PNB Bank, Hoshiyarpur, Sector 51, Noida, Uttar Pradesh 201301",
            address_link: "https://maps.app.goo.gl/WmdQFpw8LhnPeirb6",
        },
        
    ]
 }
 const {sub_title, title, locations} = google_map_content

const GoogleMapArea = () => {
    return (
        <>
            <section className="map-area map-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="map-bg">
                                <iframe src={google_map_link} style={{ width: '100%', minHeight: 400, border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="map-content mt-4" style={{textAlign:'left'}}>
                                <span>{sub_title}</span>
                                <h4 className="map-title">{title}</h4>
                                {locations.map((item, i) => (
                                    <div key={i} className="location d-flex align-items-start my-2">
                                        <a
                                            target="_blank"
                                            href={item.address_link}
                                            rel="noopener noreferrer"
                                            className="location-icon me-2"
                                        >
                                            <span>{item.icon}</span>
                                        </a>
                                        <a
                                            target="_blank"
                                            href={item.address_link}
                                            rel="noopener noreferrer"
                                            className="location-icon me-2"
                                        >
                                            <div className="location-content">
                                            <h4 className="location-title mb-1">{item.country}</h4>
                                            <p style={{margin:0}}>{item.address}</p>
                                        </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GoogleMapArea;