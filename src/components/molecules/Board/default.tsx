import BoardFooterIcon from '../../atoms/BoardFooterIcon'
import BoardDetails from '../../atoms/BoardDetails'
import BoardTop from '../../atoms/BoardTop'
import BoardBottom from '../../atoms/BoardBottom'
import BoardFooter from '../BoardFooter'
import LinesEllipsis from 'react-lines-ellipsis'

type BoardProps = {
  title: string
  picture: string
  onDetails: Function
  onHighlights: Function
}

const Board: React.FC<BoardProps> = ({ title, picture, onDetails, onHighlights }) => {
  return (
    <a href="/lorem-ipsum/requirements" className="rounded block bg-blue-100 bg-cover	bg-center	leading-5 relative no-underline p-4 text-white	" style={{
      backgroundImage: `url('${picture}')`
    }}>
      <span className="bg-black bg-opacity-50 inset-0 absolute rounded block"></span>
      <BoardDetails>
        <BoardTop> 
          <div>
            <LinesEllipsis
              text={title}
              maxLine='2'
              ellipsis='...'
              trimRight
              basedOn='letters'
            />
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