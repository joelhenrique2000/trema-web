type AllBoardProps = {
  
}

const AllBoard: React.FC<AllBoardProps> = ({ children }) => {
  return (
    <div className="all-board">
      <div className="all-board__container">
        {children}
      </div>
    </div>
  );
}

export default AllBoard;