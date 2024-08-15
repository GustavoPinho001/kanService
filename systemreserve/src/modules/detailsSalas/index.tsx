import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import salas from "../../utils/arreys/arrey";

const DetailsSalas = () => {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da URL
  const sala = salas.find(sala => sala.id === Number(id));

  if (!sala) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100 p-4">
        <p className="text-xl">Sala não encontrada.</p>
        <Link to="/" className="bg-black text-white text-2xl mt-4 rounded-full p-4 hover:bg-gray-700 hover:text-gray-300 transition duration-300">← Voltar</Link>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-white">

      {/* Cabeçalho */}
      <header className="w-full bg-white p-4 text-black text-left text-4xl font-montserrat-semibold border-b-gray-500">
        Detalhes da {sala.nome}
      </header>

      <div className="flex flex-grow flex-row px-8 py-10">
        {/* Esquerda */}
        <div className="w-1/2 text-4xl flex flex-col text-black font-montserrat-thin">
          <p className="text-2xl text-left py-10">{sala.descricao1}</p>
          <p className="text-2xl text-left">{sala.descricao2}</p>
                {/* Back Link */}
      <Link to="/" className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-full hover:bg-black hover:text-white transition duration-300 my-20">
        <span className="text-3xl">←</span>
      </Link>
        </div>

        {/* Direita - Split into Table and Image Vertically */}
        <div className="w-1/2 flex flex-col">
          {/* Table Section (Top Half) */}
          <div className="flex-grow bg-gray-50 p-4 border-b border-gray-300">
            <table className="min-w-full min-h-1 bg-white border border-gray-200">
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
