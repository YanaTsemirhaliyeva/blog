import ReactPaginate from 'react-paginate';
import './pagination.scss'
import { usePosts } from '../../store/posts';


export default function Pagination () {
  const {activePage, setActivePage} = usePosts();

  const pageCount = 10;

  const handlePageClick = (event: { selected: number }) => {
    setActivePage(event.selected + 1)
  };

  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={activePage - 1}
      />
    </div>
  );
}
