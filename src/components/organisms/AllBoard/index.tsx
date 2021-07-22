type AllBoardProps = {
  
}

const AllBoard: React.FC<AllBoardProps> = ({ children }) => {
  return (
    <div className="w-full max-w-3xl min-w-xs p-8">
      <div>
         {/* className="all-board__container"> */}
        {children}
      </div>
    </div>
  );
}

export default AllBoard;