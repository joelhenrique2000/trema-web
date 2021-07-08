type BoardItemProps = {
  
}

const BoardItem: React.FC<BoardItemProps> = ({ children }) => {
  return (
    <li className="board-list__item">
      {children}
    </li>
  );
}

export default BoardItem;