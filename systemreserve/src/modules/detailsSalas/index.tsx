
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

  if (!salas) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white p-4">
        <p className="text-xl">Sala não encontrada.</p>
        <Link to="/" className="bg-black text-white text-2xl mt-4 rounded-full p-4 hover:bg-gray-700 hover:text-gray-300 transition duration-300">← Voltar</Link>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex items-start justify-start bg-white p-4">
      <div className="w-[40%] text-left text-black font-poppins">
        <h1 className="font-semibold text-4xl tracking-widest">SOBRE A SALA {salas.id}</h1>
        <p className="text-xl mt-10 tracking-tighter">{salas.descricao1}</p>
        <p className="text-xl mt-2 tracking-tighter">{salas.}</p>
        <h5 className="text-4xl mt-2 tracking-tighter mb-20 p-2">{salas.quantidadeCadeiras} lugares disponíveis</h5>
        <Link to="/" className="bg-black text-white text-2xl rounded-full p-2 hover:bg-white hover:text-black transition duration-300">←</Link>
      </div>
    </div>
  );
};


export default DetailsSalas;