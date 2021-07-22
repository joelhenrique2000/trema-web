type BoardListProps = {
  
}

const BoardList: React.FC<BoardListProps> = ({ children }) => {
  return (
    <ul className="flex justify-start flex-wrap flex-col">
      {children}
    </ul>
  );
}

export default BoardList;