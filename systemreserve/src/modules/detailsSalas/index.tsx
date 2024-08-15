import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import salas from "../../utils/arreys/arrey";

const DetailsSalas = () => {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da URL
  const sala = salas.find(sala => sala.id === Number(id));

  if (!sala) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white p-4">
        <p className="text-xl">Sala não encontrada.</p>
        <Link to="/" className="bg-black text-white text-2xl mt-4 rounded-full p-4 hover:bg-gray-700 hover:text-gray-300 transition duration-300">← Voltar</Link>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100">

      {/* Cabeçalho */}
      <header className="w-full bg-white p-4  text-black text-left text-4xl font-montserrat-<semibold>  border-b-gray-500">
        Detalhes da {sala.nome}
      </header>

      <div className="flex flex-grow flex-row px-8 py-10">
        {/* Esquerda */}
        <div className="w-1/2 text-4xl flex flex-col text-black font-montserrat-<thin>">
          <p className="text-2xl text-left">{sala.descricao1}</p>
          <p className="text-2xl text-left py-5">{sala.descricao2}</p>
        </div>

        {/* Direita */}
        <div className="w-1/2 text-4xl flex flex-col text-black font-mono border-l-gray-950">
          {/* mostrar detalhes das salas */}
          <h5 className="text-4xl mt-2 tracking-tighter mb-20 py-1">{sala.projetor ? "Projetor com tela retrátil disponível" : "Sem projetor"}</h5>
          <h5 className="text-4xl mt-2 tracking-tighter mb-20 py-1">{sala.quantidadeCadeiras} lugares disponíveis</h5>
        </div>
      </div>

      {/* Back Link */}
      <Link to="/" className="bg-black text-white text-2xl rounded-md p-2 hover:bg-white hover:text-black transition duration-300 m-8">
        ← Voltar
      </Link>
    </div>
  );
};

export default DetailsSalas;
