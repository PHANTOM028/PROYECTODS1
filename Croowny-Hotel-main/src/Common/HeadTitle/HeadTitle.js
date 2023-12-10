import React from "react";
import "./HeadTitle.css";
import { useLocation, Link } from "react-router-dom";

const HeadTitle = () => {
  const location = useLocation();
  const pageTitle = location.pathname.split("/")[1];

  return (
    <>
      <section className='image-heading'>
        <div className='container'>
          <h1>{pageTitle}</h1>
          <button>
            <Link to='/'> Home / </Link>
            <span>{pageTitle}</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default HeadTitle;
