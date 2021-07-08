import BoardFooterIcon from '../../atoms/BoardFooterIcon'

type BoardFooterProps = {
  
}

const BoardFooter: React.FC<BoardFooterProps> = ({  }) => {
  return (
    <div className="board-footer">
      <span className="board-footer__title">Lorem</span>
      <BoardFooterIcon />
    </div>
  );
}

export default BoardFooter;