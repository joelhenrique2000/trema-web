import BoardFooterIcon from '../../atoms/BoardFooterIcon'
import BoardDetails from '../../atoms/BoardDetails'
import BoardTop from '../../atoms/BoardTop'
import BoardBottom from '../../atoms/BoardBottom'
import BoardFooter from '../BoardFooter'

type BoardProps = {
  title: string
  picture: string
  onDetails: Function
  onHighlights: Function
}

const Board: React.FC<BoardProps> = ({ title, picture, onDetails, onHighlights }) => {
  return (
    <a href="/lorem-ipsum/requirements" className="board" style={{
      backgroundImage: `url('${picture}')`
    }}>
      <span className="board__fade"></span>
      <BoardDetails>
        <BoardTop>
          <div>
            {title}
          </div>
        </BoardTop>
        <BoardBottom>
          <BoardFooter />
        </BoardBottom>
      </BoardDetails>
    </a>
  );
}

export default Board;