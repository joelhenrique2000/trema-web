type BoardGroupProps = {
  
}

const BoardGroup: React.FC<BoardGroupProps> = ({ children }) => {
  return (
    <div className="board-group">
      <div className="board-group__container">
        {children}
      </div>  
    </div>
  );
}

export default BoardGroup;