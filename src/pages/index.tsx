const Li = () => {
  return (
    <li className="board-list__item">
      <a className="board">
        <span className="board__fade"></span>
        <div className="board__details">
          <div className="board__header">
            <div>Kaban</div>
          </div>
          <div className="board__footer">
            <span className="board-footer__title">Lorem</span>
            <div>
              <span>V</span>
              <span>S</span>
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}

export default () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="sidebar-home">
          <div className="sidebar-home__container">
            <div>
              <ul style={{
                marginBottom: '12px'
              }}>
                <li style={{
                  marginBottom: '4px'
                }}>
                  <a>link</a>
                </li>
                <li style={{
                  marginBottom: '4px'
                }}>
                  <a>link</a>
                </li>
                <li style={{
                  marginBottom: '4px'
                }}>
                  <a>link</a>
                </li>
              </ul>
            </div>
            <div>
              asd
            </div>
          </div>
        </div>
        <div className="all-board">
          <div className="all-board__container">
            <div className="board-group">
              <div className="board-group__content">
                <div className="board-group__title">
                  <div>icon</div>
                  <h3>Quadros com Estrelas</h3>
                </div>
                <div>
                  <ul className="board-list">
                    <Li />
                    <Li />
                    <Li />
                    <Li />
                    <Li />
                    <Li />
                  </ul>
                </div>
              </div>  
            </div>
            <div className="board-group">
              <div className="board-group__content">
                <div className="board-group__title">
                  <div>icon</div>
                  <h3>Quadros com Estrelas</h3>
                </div>
                <div>
                  <ul className="board-list">
                    <Li />
                    <Li />
                    <Li />
                    <Li />
                    <Li />
                    <Li />
                  </ul>
                </div>
              </div>  
            </div>
            <div className="board-group">
              <div className="board-group__content">
                <div className="board-group__title">
                  <div>icon</div>
                  <h3>Quadros com Estrelas</h3>
                </div>
                <div>
                  <ul className="board-list">
                    <Li />
                    <Li />
                    <Li />
                    <Li />
                    <Li />
                    <Li />
                  </ul>
                </div>
              </div>  
            </div>
            <div className="board-group">
              <div className="board-group__content">
                <div className="board-group__title">
                  <div>icon</div>
                  <h3>Quadros com Estrelas</h3>
                </div>
                <div>
                  <ul className="board-list">
                    <Li />
                    <Li />
                    <Li />
                    <Li />
                    <Li />
                    <Li />
                  </ul>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}