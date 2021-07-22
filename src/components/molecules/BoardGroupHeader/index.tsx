type BoardGroupHeaderProps = {
  title: string
}

const BoardGroupHeader: React.FC<BoardGroupHeaderProps> = ({ title }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        {/* <div>icdon</div> */}
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default BoardGroupHeader;