export default () => {
  return (
    <div className="signin">
      <div className="signin-section">
        <img src="" alt="" className="signin-section__logo" />
        <div className="signin-section__container-form">
          <h1 className="signin-section__title">Bem-vindo de volta</h1>
          <div className="divider">
            <span>login com email</span>
          </div>
          <form className="signin-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Insira o email" id="email" />
            </div>
            <div className="form-group">
              <label>Senha</label>
              <input type="password" className="form-control" placeholder="Insira a email" id="password" />
            </div>
            <div className="row">
              <div className="col col-12 col-lg-6">
                <div className="form-group">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="keep-logged-in" />
                    <label className="form-check-label" htmlFor="keep-logged-in">Keep me logged in</label>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-lg-6 text-lg-right">
                <div className="form-group">
                  <a href="resetpw">Forgotten your password?</a>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-block">Log in</button>
          </form>
          <div className="divider"></div>
            <p className="no-account">Não tem uma conta? <a href="">Crie uma aqui</a></p>
          </div>
      </div>
      <div className="signin-hero">
        <div className="signin-hero__header">
          <h3>Trema Academy</h3>
          <p>Temos dicas e ferramentos para que você consiga criar em gerenciar toda sua documentação</p>
          <button>comece a aprender</button>
        </div>
      </div>
    </div>
  )
}