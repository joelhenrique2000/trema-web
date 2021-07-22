import BoardFooterIcon from '../../atoms/BoardFooterIcon'

type BoardFooterProps = { 
  
}

const BoardFooter: React.FC<BoardFooterProps> = ({  }) => {
  return (
    <div className="flex-grow-0 flex-shrink-0 flex items-baseline	justify-between">
      <span>Lorem</span>
      <BoardFooterIcon />
    </div>
  );
}

export default BoardFooter;