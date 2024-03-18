import { HandHeart } from "lucide-react";

type infoMusicProps = {
    musicName: string,
    composer: string,
    interpreter: string,
}
export default function InfoMusic ({musicName, composer, interpreter}:infoMusicProps) {
    return(
        <div className="flex flex-col w-full h-auto gap-1 px-2">
            <p className="text-base">{musicName}</p>
            <div className="h-auto w-full flex flex-col text-sm">
                <div className="flex gap-2">
                    <p className="font-Inter font-normal opacity-85 text-zinc-400">
                    Autor(es):
                    </p>
                    <p className="font-light text-zinc-200 opacity-85">
                    {composer}
                    </p>
                </div>
                <div className="flex gap-2">
                    <p className="font-Inter font-normal opacity-85 text-zinc-400">
                    Interprete(es):
                    </p>
                    <p className="font-light text-zinc-200 opacity-85">
                    {interpreter}
                    </p>
                </div>
            </div>
            <div className="flex gap-2">
                <HandHeart />
                <p className="font-Roboto">{Number(0)}</p>
            </div>
        </div>
    )
}