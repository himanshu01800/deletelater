import React from 'react';

const Pagination = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination pagination-reset justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
            <i className="zmdi zmdi-long-arrow-left"></i>
          </a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item d-none d-md-inline-block"><a className="page-link" href="#">2</a></li>
        <li className="page-item d-none d-md-inline-block"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">...</a></li>
        <li className="page-item"><a className="page-link" href="#">8</a></li>
        <li className="page-item">
          <a className="page-link" href="#">
            <i className="zmdi zmdi-long-arrow-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
