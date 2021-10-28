import ReactPaginate from 'react-paginate';

const Pagination = ({pageCount, pageChange}) => {
    return (
        <ReactPaginate
        pageCount={pageCount}
        pageRange={0}
        marginPagesDisplayed={2}
        onPageChange={pageChange}
        containerClassName={'paginator__wrapper'}
        previousLinkClassName={'paginator__prev-page'}
        breakClassName={'page'}
        nextLinkClassName={'paginator__next-page'}
        pageClassName={'paginator__page'}
        disabledClassNae={'disabled'}
        activeClassName={'active'}
      />
    );  
}

export default Pagination;