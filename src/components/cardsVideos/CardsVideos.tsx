import ModalCllickCard from "./ModalClickCard";

export default function CardsVideos () {
    return(
        <>
            <div className={`
                flex flex-wrap w-full h-auto gap-4 justify-center items-center
                max-md:flex-col
            `}>
                {Array.from({length:10}).map((_, index)=> (
                    <div className={`
                        w-[25%] h-72 flex flex-col gap-3 cursor-pointer
                        max-md:w-full max-md:px-4
                    `} key={index}>
                        <div className="w-full h-[61%] bg-white"></div>
                        <div className="flex flex-col w-full h-auto">
                            <p className="text-lg">Nome da música</p>
                            <p className="text-base font-light italic opacity-85 text-zinc-400">Autores, cantores, interpretes</p>
                        </div>
                    </div>
                ))}
            </div>
            <ModalCllickCard />
        </>
    )
}