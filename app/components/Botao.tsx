
interface TituloProps {
    texto: string;
}
export function Botao1({ texto }: TituloProps) {
    return (
        <div className="flex w-full">
            <button className="flex justify-center w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:opacity-90 transition">
                {texto}</button>
        </div>

    )
}

export function Botao2({ texto }: TituloProps) {
    return (
        <div className="flex w-full">
            <button className="flex justify-center w-full bg-gray-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-600 transition">
                {texto}</button>
        </div>

    )
}