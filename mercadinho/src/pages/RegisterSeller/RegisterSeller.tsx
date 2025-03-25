import './styles.css'
function RegisterSeller() {

  return (
      <div>
        <h1>Cadastro de novo mercado</h1>
        <h2>Responda os formulário para se cadastrar</h2>
        <form action="">
          <input type="text" name="nome" placeholder="Nome Mercadinho"/>
          <input type="text" name="cnpj" placeholder="CNPJ"/>
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="celular" placeholder="Celular"/>
          <input type="text" name="senha" placeholder="Registe sua senha"/>
        </form>
      </div>
  )
}

export default RegisterSeller