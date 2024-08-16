import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import salas from "../../utils/arreys/arrey";
import salaimage from "../../assets/sala10.svg";

const DetailsSalas = () => {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da URL
  const sala = salas.find(sala => sala.id === Number(id));

  if (!sala) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100 p-4">
        <p className="text-xl">Sala não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      {/* Cabeçalho */}
      <header className="w-full bg-white p-4 text-black text-left text-4xl font-plex-mono border-b-2 border-b-gray-300">
        {sala.nome}
      </header>

      <div className="flex flex-grow flex-row px-8 py-10">
        {/* Esquerda */}
        <div className="w-1/2 text-4xl flex flex-col text-black font-plex-mono">
          <p className="text-2xl text-left pt-5 pb-10">{sala.descricao1}</p>
          <p className="text-2xl text-left">{sala.descricao2}</p>
          <Link to="/" className="w-12 h-12  bg-black text-white text-2xl mt-4 rounded-full  hover:bg-gray-700 hover:text-gray-300 transition duration-300">←</Link>
        </div>

        {/* Direita - Split into Image and Table Vertically */}
        <div className="w-1/2 flex flex-col">
          {/* Image Section (Top Half) */}
          <div className="flex-grow bg-gray-50 p-4 flex items-center justify-center">
            <img src={salaimage} alt="Sala" className="h-1/6 object-contain" />
          </div>

          {/* Table Section (Bottom Half) */}
          <div className="flex-grow bg-gray-50 p-4 border-t border-gray-300 overflow-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <tbody>
                <tr className="border-b">
                  <th className="px-6 py-4 text-left text-xl font-medium text-gray-500">Projetor</th>
                  <td className="px-6 py-4 text-xl text-gray-700">{sala.projetor ? "Sim" : "Não"}</td>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-left text-xl font-medium text-gray-500">Espaços disponíveis</th>
                  <td className="px-6 py-4 text-xl text-gray-700">{sala.quantidadeCadeiras}</td>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-left text-xl font-medium text-gray-500">Ar-Condicionado</th>
                  <td className="px-6 py-4 text-xl text-gray-700">{sala.arCondicionado ? "Sim" : "Não"}</td>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-left text-xl font-medium text-gray-500">Lousas</th>
                  <td className="px-6 py-4 text-xl text-gray-700">{sala.lousas}</td>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-left text-xl font-medium text-gray-500">Ocupada</th>
                  <td className="px-6 py-4 text-xl text-gray-700">{sala.disponível ? "Sim" : "Não"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSalas;