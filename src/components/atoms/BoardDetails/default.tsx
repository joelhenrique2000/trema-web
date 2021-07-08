type BoardDetailsProps = {
  
}

const BoardDetails: React.FC<BoardDetailsProps> = ({ children }) => {
  return (
    <div className="board__details">
      {children}
    </div>
  );
}

export default BoardDetails;