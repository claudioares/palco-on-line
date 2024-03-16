export default function ModalCllickCard () {
    return(
        <>
            <div className="hidden fixed top-0 w-full h-full py-10 px-10 overflow-hidden bg-black z-50">
                <div className="flex gap-1 w-full h-full">
                    <form className="flex flex-col justify-between w-[25%] h-full bg-zinc-900 bg-opacity-80 rounded-l-lg">
                        <div className="w-full h-full overflow-y-auto font-Dosis py-2 px-4">
                            <span className="font-semibold text-yellow-400">nickName</span>
                            <p className="flex flex-wrap w-full h-full text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quibusdam, veniam non quae asperiores reiciendis 
                                aspernatur voluptates commodi aut harum error dicta? 
                                Eum corporis non provident sunt, 
                                voluptas suscipit voluptatum odio?
                            </p>
                        </div>
                        <input type="text" className="w-full h-8 bg-white text-black p-2" placeholder="Digite sua menssagem"/>
                    </form>
                    <div className="w-[75%] h-full bg-slate-400 rounded-r-lg"></div>
                </div>
            </div>
        </>
    )
}