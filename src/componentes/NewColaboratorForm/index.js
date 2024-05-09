import "./NewColaboratorForm.css"
// outra forma de utilizar os componentes, usando o index,js na pasta
import TextField from '../TextField';

const NewColaboratorForm = () => {
    return (
        <section className="form-section">
            <form>
                <h2>Preencha para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu Nome"/>
                <TextField label="Cargo" placeholder="Digite seu Cargo"/>
                <TextField label="Imagem" placeholder="Adicione o endereço da sua Imagem"/>
            </form>
        </section>
    )
}

export default NewColaboratorForm