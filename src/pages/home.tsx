import AllBoard from '../components/organisms/AllBoard'
import Header from '../components/organisms/Header'
import BoardGroup from '../components/molecules/BoardGroup'
import BoardGroupHeader from '../components/molecules/BoardGroupHeader'
import BoardGroupContent from '../components/molecules/BoardGroupContent'
import Modal from '../components/molecules/Modal'
import { useRef } from 'react'

export default () => {

  const buttonModalRef = useRef(null);

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-2">
        <div className="bg-red-300 hidden">s</div>
        <div className="bg-blue-400">
          <AllBoard> 
            <BoardGroup>
              <BoardGroupHeader
                title="Quadros com Estrelas"
              />
              <BoardGroupContent
                data={[]}
              />
            </BoardGroup>
            <BoardGroup>
              <BoardGroupHeader
                title="Quadros com Estrelas"
              />
              <BoardGroupContent
                data={[]}
              />
            </BoardGroup>
            <BoardGroup>
              <BoardGroupHeader
                title="Quadros com Estrelas"
              />
              <BoardGroupContent
                data={[]}
              />
            </BoardGroup>
            <BoardGroup>
              <BoardGroupHeader
                title="Quadros com Estrelas"
              />
              <BoardGroupContent
                data={[]}
              />
            </BoardGroup>
          </AllBoard>
        </div>
      </div>
    </div>
  )

  return (
    <div className="home">
      <Header />
      
      <Modal triggerButtonRef={buttonModalRef}>
        modal usando manipulação na DOM
      </Modal>
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
                  <button ref={buttonModalRef} type="submit" className="btn btn--block">criar projeto</button>
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
        <AllBoard>
          <BoardGroup>
            <BoardGroupHeader
              title="Quadros com Estrelas"
            />
            <BoardGroupContent
              data={[]}
            />
          </BoardGroup>
          <BoardGroup>
            <BoardGroupHeader
              title="Quadros com Estrelas"
            />
            <BoardGroupContent
              data={[]}
            />
          </BoardGroup>
          <BoardGroup>
            <BoardGroupHeader
              title="Quadros com Estrelas"
            />
            <BoardGroupContent
              data={[]}
            />
          </BoardGroup>
          <BoardGroup>
            <BoardGroupHeader
              title="Quadros com Estrelas"
            />
            <BoardGroupContent
              data={[]}
            />
          </BoardGroup>
        </AllBoard>
      </div>
    </div>
  )
}