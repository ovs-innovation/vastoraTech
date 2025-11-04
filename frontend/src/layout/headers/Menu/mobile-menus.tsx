"use client"
import React, { useState } from "react";
import menu_data from "./menu-data";
import Link from "next/link";
import Image from "next/image";


const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <>
      <nav className="tp-main-menu-content">
        <ul>
          {menu_data.map((menu, menu_index) => (
            <React.Fragment key={menu_index}>
              {menu.title === "Home" ? (
                <li>
                  <Link href={menu.link}>{menu.title}</Link>
                </li>
              ) : menu.service_dropdown ? (
                <li className="header-services has-dropdown has-mega-menu dropdown-opened">
                  <Link href={menu.link}>{menu.title}
                    <button className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}
                      onClick={() => openMobileMenu(menu.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}>
                      <i className="fa-regular fa-angle-right"></i>
                    </button>
                  </Link>
                  <div className="tp-mega-menu tp-submenu submenu"
                    style={{ display: navTitle === menu.title ? "block" : "none", }}>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="tp-menu-banner">
                          <h5 className="tp-menu-banner-title">{menu.inner_title}</h5>
                          <ul>
                            {menu.sub_menus?.map((service_menu, service_index) => (
                              <li key={service_index}>
                                <Link href={service_menu.link}>
                                  <span>
                                    <Image src={service_menu.demo_img} alt="demo-img" />
                                  </span>
                                  {service_menu.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li>
                  <Link href={menu.link}>{menu.title}</Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;



