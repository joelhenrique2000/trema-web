export default () => {
  return (
    <div className="signin">
      <div className="signin-section">
        <img src="/trema.svg" alt="" className="signin-section__logo" />
        <div className="signin-section__container-form">
          <h1 className="signin-section__title">Crie uma conta. É grátis!</h1>
          <div className="divider">
            <span>cadastre com email</span>
          </div>
          <form className="signin-form">
            <div className="form-group">
              <label className="form-label">Nome</label>
              <input type="text" className="form-control" placeholder="Insira o nome" id="nome" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Insira o email" id="email" />
            </div>
            <div className="form-group">
              <label className="form-label">Senha</label>
              <input type="password" className="form-control" placeholder="Insira a email" id="password" />
            </div>
            <div>
              <div className="form-group">
                <div className="form-check">
                  <input type="checkbox" className="form-check__checkbox" id="keep-logged-in" />
                  <label className="form-check__label" htmlFor="keep-logged-in">Aceita nosso <a href="resetpw" className="link">Termos e condições</a></label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn--block">Criar conta</button>
          </form>
          <div className="divider"></div>
            <p className="signin-section__without-account">Já tem uma conta? <a href="" className="link">Faça o login</a></p>
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