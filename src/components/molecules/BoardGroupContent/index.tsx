import BoardList from '../../atoms/BoardList'
import BoardItem from '../../atoms/BoardItem'
import Board from '../../molecules/Board'
import Link from 'next/link'

type BoardGroupHeaderProps = {
  data: object
}

const BoardGroupHeader: React.FC<BoardGroupHeaderProps> = ({ data, children }) => {
  return (
    <div>
       {/* className="board-group__content"> */}
      <BoardList>
        {Array(9).fill(0).map((item, index) => {
          return (
            <BoardItem>
              <Board
                title="Reqddddddd ddddddddddddd ddddddddddddd dddddddddd duisitos"
                picture={`https://source.unsplash.com/480x32${index}/?wallpaper`}
                onDetails={() => {}}
                onHighlights={() => {}}
              />
            </BoardItem>
          );
        })}
      </BoardList>
    </div>
  );
}

export default BoardGroupHeader;