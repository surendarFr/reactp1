import React from "react";
import ReactPaginate from "react-paginate";
import { Icon } from "semantic-ui-react";

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <div className="pagination-container">
      <ReactPaginate
        previousLabel={<Icon name="angle left" />}  // Left arrow
        nextLabel={<Icon name="angle right" />}    // Right arrow
        // breakLabel=""
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="pagination-horizontal"
        activeClassName="active"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        breakClassName="page-item"
      />
    </div>
  );
};

export default Pagination;
