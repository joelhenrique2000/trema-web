type BoardGroupHeaderProps = {
  title: string
}

const BoardGroupHeader: React.FC<BoardGroupHeaderProps> = ({ title }) => {
  return (
    <div className="board-group__header">
      <div className="board-group__title">
        {/* <div>icdon</div> */}
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default BoardGroupHeader;