import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import ReactPaginate from "react-paginate";
import "./productsList.scss";

const ProductList = ({ catId, maxPrice, sort, subCats }) => {
  const { loading, data, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  const dataLength = data.length;
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const pageCount = Math.ceil(dataLength / itemsPerPage);
  
  const endOffset = itemOffset + itemsPerPage;
  let currentItems = data.slice(itemOffset, endOffset);

  if(dataLength < itemsPerPage) {
    currentItems = data;
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataLength;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='productList'>
        {loading
          ? "loading"
          : currentItems?.map((item) => <Card item={item} key={item.id} />)}
      </div>
      <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='<'
        renderOnZeroPageCount={null}
        className='pagination'
        activeClassName='active'
      />
    </>
  );
};

export default ProductList;
