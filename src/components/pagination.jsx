import _ from "lodash";
import React from "react";

const Pagination = ({ pages, setPage, activepage }) => {

    const prevpage = () =>{
        setPage((oldpage) => {
            let prevPage = oldpage - 1 ;
            if( prevPage < 1 ){
                prevPage = pages;
            }
            return prevPage;
        })
    }

    const nextPage = () =>{
        setPage((oldpage) => {
            let next = oldpage + 1 ;
            if(next > pages ){
                next =  1
            }
            return next
        })
    }
  return (
    <nav>
      <ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
        <li className="page-item" onClick={prevpage}>
          <a href="#" className="page-link">
            قبلی
          </a>
        </li>
        {_.times(pages, (index) => (
          <li
            key={`pagination-` + index}
            onClick={() => setPage(index + 1)}
            className={`page-item ${index + 1 === activepage ? "active" : ""}`}
          >
            <a href="#" className="page-link">
              {index + 1}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a
            href="#"
            className="page-link"
            onClick={nextPage}
          >
            بعدی
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
