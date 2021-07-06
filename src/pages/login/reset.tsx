export default () => {
  return (
    <div className="signin">
      <div className="signin-section">
        <img src="/trema.svg" alt="" className="signin-section__logo" />
        <div className="signin-section__container-form">
          <h1 className="signin-section__title">Esqueceu sua senha?</h1>
          <div className="divider">
          </div>
          <form className="signin-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Insira o email" id="email" />
            </div>
            <button type="submit" className="btn btn--block">Envie email de verificação</button>
          </form>
          <div className="divider"></div>
            <p className="signin-section__without-account"><a href="" className="link">Volte para página de login</a></p>
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