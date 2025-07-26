import FooterFive from "@/layout/footers/FooterFive";
import HeaderFive from "@/layout/headers/HeaderFive";
import ContactArea from "./ContactArea";
import GoogleMapArea from "./GoogleMapArea";



const Contact = () => {
    return (
        <>
            <HeaderFive />
            <main>
                <ContactArea />
                <GoogleMapArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default Contact;