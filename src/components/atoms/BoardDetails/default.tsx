type BoardDetailsProps = {
  
}

const BoardDetails: React.FC<BoardDetailsProps> = ({ children }) => {
  return (
    <div className="flex relative flex-col justify-between h-32">
      {children}
    </div>
  );
}

export default BoardDetails;