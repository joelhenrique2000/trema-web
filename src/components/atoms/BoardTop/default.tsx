
type BoardTopProps = {
  
}

const BoardTop: React.FC<BoardTopProps> = ({ children }) => {
  return (
    <div className="flex-grow-0 flex-shrink-0 font-bold inline-block w-full text-lg">
      {children}
    </div>
  );
}
// max-h-10 
export default BoardTop;