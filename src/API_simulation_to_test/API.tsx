import imgCard1 from "../assets/imgns_videosCards/img_card (1).webp"
import imgCard2 from "../assets/imgns_videosCards/img_card (2).jpg"
import imgCard3 from "../assets/imgns_videosCards/img_card (3).jpg"
import imgCard4 from "../assets/imgns_videosCards/img_card (4).jpg"
import imgCard5 from "../assets/imgns_videosCards/img_card (5).jpg"
import imgCard6 from "../assets/imgns_videosCards/img_card (6).jpg"
import imgCard7 from "../assets/imgns_videosCards/img_card (7).jpg"
import dotenv from 'dotenv';
dotenv.config();



export const playlistArr = async () => {
    const token = process.env.USER_TOKEN;
    const playlistId = process.env.PLAY_LIST_ID;
    
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${token}`;
    
    const response = await fetch(url)
      .then((response) => response.json())
      .then(data => {return data})
      .catch((error) => console.error("Erro:", error));


      return response.items;
}


interface IImageMetadata {
    id: string,
    slug: string,
    img: string | any,
    nameMusic: string,
    composer: string,
    interpreter: string
}

export const apiImagensCardVideos: IImageMetadata[] = [
    {
        id:"01",
        slug: "chaodegiz",
        img:imgCard1,
        nameMusic: "Chão de giz",
        composer: "Zé Ramalho",
        interpreter: "Joana Valez"
        
    },
    {
        id:"02",
        slug: "travessia",
        img:imgCard2,
        nameMusic: "Travessia",
        composer: "João Alberto",
        interpreter: "Tiê"
    },
    {
        id:"03",
        slug: "osmalesdomundo",
        img:imgCard3,
        nameMusic: "Os males do mundo",
        composer: "Rogerio Frausino",
        interpreter: "Romeu Matheus"
    }, 
    {
        id:"04",
        slug: "evidencias",
        img:imgCard4,
        nameMusic: "Evidências",
        composer: "Chitãozinho e Xororó",
        interpreter: "Maria Carmen"
    },
    {
        id:"05",
        slug: "indios",
        img:imgCard5,
        nameMusic: "Índios",
        composer: "Renato Russo",
        interpreter: "Fernando Pessoa"
    },
    {
        id:"06",
        slug: "contrastes",
        img:imgCard6,
        nameMusic: "Contrastes",
        composer: "Fernando Pessoa",
        interpreter: "Fernando Pessoa"
    },
    {
        id:"07",
        slug: "emnomedobem",
        img:imgCard7,
        nameMusic: "Em nome do bem",
        composer: "João vitor",
        interpreter: "Maria Joana"
    },
]


