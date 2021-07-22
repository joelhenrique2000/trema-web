type BoardItemProps = {
  
}

const BoardItem: React.FC<BoardItemProps> = ({ children }) => {
  return (
    <li className="box-border relative cursor-pointer w-full mb-4">
      {children}
    </li>
  );
}

export default BoardItem;