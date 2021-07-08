import Header from '../../../components/organisms/Header'

export default () => {
  return (
    <div className="requirements">
      <Header />
      <div className="requirements__container">
        <div className="sidebar-requirements">
          <div className="sidebar-requirements__container">
            <div className="sidebar-requirements__types">

            </div>
            <div className="sidebar-requirements__list">
              <ul className="requirement-list">
                {Array(70).fill(0).map(() => {
                  return (
                    <li className="requirement-list__item">
                      Lorem ipsum dolor
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="all-requirements-card">
          <div className="all-requirements-card__container">
            <ul className="requirements-card-list">
              {Array(30).fill(1).map((value, index) => {
                return (
                  <li className="requirements-card-list__item">
                    <div className="requirements-card">
                      <div className="requirements-card__check">
                        <div className="form-check">
                          <input type="checkbox" className="form-check__checkbox" id="keep-logged-in" />
                        </div>
                      </div>
                      <div className="requirements-card__content">
                        <div className="requirements-card__ref">{`${index+1}.`}</div>
                        <div className="requirements-card__title">{`Requisito funcional ${index+1}`}</div>
                      </div>
                      <div className="requirements-card__date">Hoje</div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}