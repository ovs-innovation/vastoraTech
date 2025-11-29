import Link from "next/link";
import MobileMenus from "@/layout/headers/Menu/mobile-menus";
import { useEffect, useState } from "react";



const OffcanvasArea = ({ openCanvas, setOpenCanvas }: any) => {

	const [nevIcon, setNevIcon] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			setNevIcon(windowWidth <= 1199);
		};
		// Call the function once to set the initial value based on the window width
		handleResize();

		// Add event listener for the 'resize' event
		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [])

	return (
		<>
			{nevIcon &&
				<>
					<div className={`offcanvas__area ${openCanvas ? "offcanvas-opened" : ""}`}>
						<div className="offcanvas__wrapper">
							<div className="offcanvas__close">
								<button className="offcanvas__close-btn offcanvas-close-btn" onClick={() => setOpenCanvas(false)}>
									<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
											strokeLinejoin="round" />
										<path d="M1 1L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
											strokeLinejoin="round" />
									</svg>
								</button>
							</div>
							<div className="offcanvas__content">
								<div className="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
									<div className="offcanvas__logo logo">
										<Link href="/">
											<img src="/assets/img/logo/logo2.png" width={80} height={80} alt="logo" />
										</Link>
									</div>
								</div>
								<div className="tp-main-menu-mobile mb-35">
									<MobileMenus />
								</div>
								<div className="offcanvas__btn">
									<Link href="/contact" className="tp-btn w-100">Getting Started</Link>
								</div>
								<div className="offcanvas__contact mb-40">
									<p className="offcanvas__contact-call"><a href="tel:+964-742-44-763">+91 8595658592</a></p>
									<p className="offcanvas__contact-mail"><a href="mailto:vastoratech@gmail.com">vastoratech@gmail.com</a></p>
								</div>
								<div className="offcanvas__social">
									<a href="https://www.linkedin.com/in/vastora-tech-pvt-ltd-97bab2392" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
										<i className="fab fa-linkedin-in"></i>
									</a>
									<a href="https://www.instagram.com/vastoratech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
										<i className="fab fa-instagram"></i>
									</a>
									<a href="https://www.youtube.com/@VastoraTech" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
										<i className="fab fa-youtube"></i>
									</a>
									<a href="https://in.pinterest.com/vastorat/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
										<i className="fab fa-pinterest-p"></i>
									</a>
									<a href="https://www.facebook.com/profile.php?id=61578752105209" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a href="https://x.com/Vastora_tech" target="_blank" rel="noopener noreferrer" aria-label="X">
										<i className="fab fa-twitter"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className={`body-overlay ${openCanvas ? "opened" : ""}`} onClick={() => setOpenCanvas(false)} ></div>
				</>
			}
		</>
	);
};

export default OffcanvasArea;