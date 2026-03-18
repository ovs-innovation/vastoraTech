import React from "react";
import Link from "next/link";
import menu_data from './menu-data';
import Image from "next/image";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.id === 3 ? "header-services has-dropdown has-mega-menu" : ""}`}>
            <Link href={item.link}>{item.title}</Link>
            {item.id === 3 && (
              <div className="tp-mega-menu tp-submenu submenu">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tp-menu-banner">
                      <h5 className="tp-menu-banner-title">{item.inner_title}</h5>
                      <ul>
                        {item.sub_menus?.map((service_item, s_index) => (
                          <li key={s_index}>
                            <Link href={service_item.link}>
                              <span> <Image src={service_item.demo_img} alt={service_item.title || "VastoraTech"} title={service_item.title || "VastoraTech"} /> </span>
                              {service_item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tp-menu-banner-wrap">
                      <div className="tp-menu-banner-content">
                        <span>{item.banner_sub_title}</span>
                        <h5 className="tp-menu-banner-title-2">{item.banner_title}</h5>
                        <div className="tp-menu-banner-btn">
                          <Link href="/services">
                            Learn more
                            <span>{item.icon}</span>
                          </Link>
                        </div>
                      </div>
                      {item.m_banner && (
                        <div className="tp-menu-banner-thumb">
                          <Image src={item.m_banner} alt="Vastora Tech Banner" title="Vastora Tech" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;

