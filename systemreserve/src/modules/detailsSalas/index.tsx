{/*import { Link } from "react-router-dom";*/}
import { useParams } from "react-router-dom";
import salas from "../../utils/arreys/arrey";
import imagesala from "../../assets/sala10.svg"



const DetailsSalas = () => {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da URL
  const sala = salas.find(sala => sala.id === Number(id));

  if (!sala) {
    return (
      <div

        className="w-screen h-screen flex items-center justify-center bg-gray-100 p-4">
        <p className="text-xl">Sala não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen   ">
      {/* Cabeçalho */}

      <div
        style={{
          backgroundImage: `url(${imagesala})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full h-[70%] flex flex-col justify-around    p-5 text-left text-4xl font-plex-mono border-b-2 border-b-black">
        <p className="p-4 w-[15%] text-center rounded-sm bg-black opacity-70" >
          <p className="text-white">{sala.nome.charAt(0).toUpperCase() + sala.nome.slice(1)}</p>
        </p>

        <table className=" w-full flex justify-end   ">
          <tbody className=" p-3 w-[25%] flex flex-col bg-black opacity-70 rounded-sm text-white text-lg justfy-around ">
            <tr className="border-b p-2 flex gap-3">
              <th className="">Projetor</th>
              <td className="">{sala.projetor ? "Sim" : "Não"}</td>
            </tr>
            <tr className="border-b p-2 flex gap-3">
              <th className="">Espaços disponíveis</th>
              <td className="">{sala.quantidadeCadeiras}</td>
            </tr>
            <tr className="border-b p-2 flex gap-3">
              <th className="">Ar-Condicionado</th>
              <td className="">{sala.arCondicionado ? "Sim" : "Não"}</td>
            </tr>
            <tr className="border-b p-2 flex gap-3">
              <th className="">Lousas</th>
              <td className="">{sala.lousas}</td>
            </tr>
            <tr className=" p-2 flex gap-3">
              <th className="">Ocupada</th>
              <td className="">{sala.disponível ? "Sim" : "Não"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
        {/* Esquerda */}

        {/* <div className="w-1/2 text-4xl flex flex-col text-black font-plex-mono">
          <p className="text-2xl text-left pt-5 pb-10">{sala.descricao1}</p>
          <p className="text-2xl text-left">{sala.descricao2}</p>
          </div> */}


        {/* Table Section (Bottom Half) */}


    </div >
  );
};

export default DetailsSalas;