import {Title} from  './styled'



function Form(){

    return(
        <>
        <Title isRed={false}>
        <h1>Style Components
            <small>
                Página do Formulário
            </small>
        </h1>
        </Title >
            <p isRed={false}>
                Aula sobre Slyled Components

            </p>
            <input type = "text"></input>
        </>
    )

}
export default Form