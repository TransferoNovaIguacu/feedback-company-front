interface TituloProps{
    titulo: string;
}
export function Title({titulo}: TituloProps){
    return(
        <h1>{titulo}</h1>
    )
}