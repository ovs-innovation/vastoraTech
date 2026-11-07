import FooterFive from "@/layout/footers/FooterFive";
import HeaderFive from "@/layout/headers/HeaderFive";
import ContactArea from "./ContactArea";

const Contact = () => {
    return (
        <>
            <HeaderFive />
            <main>
                <ContactArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default Contact;