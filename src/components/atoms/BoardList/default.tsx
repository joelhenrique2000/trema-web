type BoardListProps = {
  
}

const BoardList: React.FC<BoardListProps> = ({ children }) => {
  return (
    <ul className="board-list">
      {children}
    </ul>
  );
}

export default BoardList;