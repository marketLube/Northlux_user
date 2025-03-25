import React from 'react'

export default function Pagination() {
  return (
    <div className="pagination-container">
      <button className="pagination-arrow">
        <span>←</span> Prev
      </button>

      <div className="pagination-numbers">
        <button className="page-number active">01</button>
        <button className="page-number">02</button>
        <button className="page-number">03</button>
        <span className="ellipsis">...</span>
        <button className="page-number">21</button>
      </div>

      <button className="pagination-arrow">
        Next <span>→</span>
      </button>
    </div>
  );
}
