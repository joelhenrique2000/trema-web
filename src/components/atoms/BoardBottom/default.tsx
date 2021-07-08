type BoardBottomProps = {
  
}

const BoardBottom: React.FC<BoardBottomProps> = ({ children }) => {
  return (
    <div className="board__bottom">
      {children}
    </div>
  );
}

export default BoardBottom;