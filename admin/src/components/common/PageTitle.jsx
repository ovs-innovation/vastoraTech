import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {" "}
        {title
          ? `${title} | Vastora Tech Admin Dashboard`
          : "Vastora Tech | Admin Dashboard"}
      </title>
      <meta
        name="description"
        content={
          description
            ? ` ${description} `
            : "Vastora Tech : Digital Engineering, E-Commerce & Agency Admin Dashboard"
        }
      />
    </Helmet>
  );
};

export default PageTitle;
