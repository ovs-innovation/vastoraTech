import HeaderFive from "@/layout/headers/HeaderFive";
import FooterFive from "@/layout/footers/FooterFive";

export const metadata = { title: "Privacy Policy | Vastora Tech" };

const PrivacyPolicy = () => {
    return (
        <>
            <HeaderFive />
            <main>
                <div className="container mt-150 mb-150">
                    <div className="row">
                        <div className="col-12">
                            <h1  className="text-center">Privacy Policy</h1>
                            <p  className="text-center">Last updated: {new Date().getFullYear()}</p>
                           
                        </div>
                    </div>
                </div>
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default PrivacyPolicy;
