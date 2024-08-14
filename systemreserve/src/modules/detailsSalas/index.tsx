
import salas from "../../utils/arreys/arrey";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const DetailsSalas = () =>{
    const { id } = useParams<{ id: string }>(); // Obtém o ID da URL
    const sala = salas.find(sala => sala.id === Number(id));
    
    console.log(sala)

    return(
        <div className=" w-screem h-screen flex items-center justify-center bg-cyan-800">
            <div className=" w-[40%] h-[40%] text-center text-4xl flex justify-around text-blue-500">
                    <h1>Detalhes da sala :{sala?.id}</h1>
                    <p>Quantida de Cadeiras : {sala?.quantidadeCadeiras}</p>
            </div>
            <Link to ="/" className="bg-black text-white text-2xl rounded-md">go back</Link>
        </div>
    )

}

export default DetailsSalas;