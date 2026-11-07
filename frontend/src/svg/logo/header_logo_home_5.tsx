import React from "react";

interface HeaderLogoProps {
    className?: string;
    variant?: "horizontal" | "stacked";
    style?: React.CSSProperties;
}

const HeaderLogoHomeFive: React.FC<HeaderLogoProps> = ({
    className = "header-logo-home-five",
    variant = "horizontal",
    style,
}) => {
    const src = variant === "horizontal"
        ? "/assets/img/logo/logo-horizontal.png?v=9"
        : "/assets/img/logo/logo2-trimmed.png";

    return (
        <img
            src={src}
            className={className}
            alt="Vastora Tech"
            title="Vastora Tech"
            style={{ display: "block", objectFit: "contain", ...style }}
        />
    );
};

export default HeaderLogoHomeFive;