

const Pagination = ({ num, setPage }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage(num)}>{num}</button>
    </div>
  )
}

export default Pagination
