type BoardGroupProps = {
  
}

const BoardGroup: React.FC<BoardGroupProps> = ({ children }) => {
  return (
    <div className="mb-8">
      <div>
         {/* className="board-group__container"> */}
        {children}
      </div>  
    </div>
  );
}

export default BoardGroup;