type BoardTopProps = {
  
}

const BoardTop: React.FC<BoardTopProps> = ({ children }) => {
  return (
    <div className="board__top">
      {children}
    </div>
  );
}

export default BoardTop;