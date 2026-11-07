'use client'
import Link from "next/link";
import NavMenu from "./Menu/nav-menu";
import React, { useState } from "react" 
import HeaderSixLogo from "@/svg/logo/header_6";
import ServiceHeaderLogo from "@/svg/logo/service_header_logo";
import OffcanvasArea from "@/components/common/OffcanvasArea";
import useSticky from "@/hooks/use-sticky";
import HeaderFiveLogo from "@/svg/logo/header_logo_home_5";

const HeaderSix = ({ style }: any) => {
	const { sticky } = useSticky()
	const [openCanvas, setOpenCanvas] = useState(false)
	return (
		<>
			<header>

				<div id="header-sticky" className={`tptransparent__header ${sticky && "header-sticky"} ${style ? "tp-white-menu" : ""} header-spaces`}>
					<div className="container-fluid">
						<div className="tp-mega-menu-wrapper">
							<div className="row align-items-center">
								<div className="col-xl-2 col-lg-6 col-sm-4 col-6">
									<div className="tplogo__area">
										{sticky ?
											<Link href="/" className="sticky-logo">
												<span>  <HeaderFiveLogo /> </span>
											</Link>
											:
											<Link href="/" className="header-logo">
												<span> {style ? <HeaderFiveLogo /> : <HeaderFiveLogo />} </span>
											</Link>
										}
									</div>
								</div>
								<div className="col-xl-7  d-none d-xl-block">
									<div className={`tpmenu__area ${style ? "header-inner-2" : "tpmenu__hover inner-header"} main-mega-menu`}>
										<nav className="tp-main-menu-content">
											<NavMenu />
										</nav>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-8 col-6">
									<div className={`tpheader__right ${style ? "tpheader__right-white" : ""} d-flex align-items-center justify-content-end`}>
										<div className="vastora-navbar-actions d-flex align-items-center">
											<div className="header-quote-wrapper d-none d-md-block">
												<Link href="/contact" className="enhanced-quote-button" aria-label="Get a Quote">
													<span className="btn-content">
														<span className="btn-label">Get a Quote</span>
														<span className="btn-arrow-icon" aria-hidden="true">
															<svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																<path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
															</svg>
														</span>
													</span>
													<span className="btn-glow-layer" aria-hidden="true" />
												</Link>
											</div>
											<div className="offcanvas-toggle-wrapper d-xl-none">
												<button type="button" className="modern-hamburger-btn" onClick={() => setOpenCanvas(true)} aria-label="Open mobile menu">
													<span className="hamburger-line line-1" />
													<span className="hamburger-line line-2" />
													<span className="hamburger-line line-3" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<OffcanvasArea openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
		</>
	);
};

export default HeaderSix;