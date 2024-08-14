import { useNavigate } from "react-router-dom";
import salas from "../../utils/arreys/arrey";
import { Sala } from "../../utils/interfaces/int";

const Home = () => {

    const navigate = useNavigate();

    const hundleDetailsRooms = (id: number) => {
        navigate(`/detalhes/${id}`);
    };

    return (
        <>
            <div className="w-screen h-screen flex">
                <div className="w-[25%] bg-slate-300 h-full overflow-y-scroll">
                    {salas.map((sala: Sala, index: number) => (
                        <div
                            onClick={() => hundleDetailsRooms(sala.id)}
                            key={index}
                            className="flex gap-9 border-b-[1px] bg-slate-700 hover:bg-slate-600">
                            <p> Nome da sala é: {sala.id}</p>
                        </div>
                    ))}
                </div>
                <div className="w-[75%] bg-slate-200">
                    <div className="w-full h-[10%] bg-slate-400 flex justify-around items-center">
                        <p className="bg-slate-700 text-center border-x w-full h-full hover:bg-slate-500">Salas De Aula</p>
                        <p className="bg-slate-700 text-center border-x w-full h-full hover:bg-slate-500">Laboratórios</p>
                        <p className="bg-slate-700 text-center border-x w-full h-full hover:bg-slate-500">Auditórios</p>
                        <p className="bg-slate-700 text-center border-x w-full h-full hover:bg-slate-500">Salas Especiais</p>
                        <p className="bg-slate-700 text-center border-x w-full h-full hover:bg-slate-500">Carros Institucionais</p>
                    </div>

                    <div className="grid grid-cols-5 gap-4 h-[90%] overflow-y-scroll p-10 bg-purple-200">
                        {salas.map((sala: Sala, index: number) => (
                            <div
                                key={index}
                                className="bg-gray-600 p-5 w-[300px] h-[300px] hover:bg-slate-500 flex flex-col items-center justify-around">
                                <p className="text-xl">{sala.id}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
