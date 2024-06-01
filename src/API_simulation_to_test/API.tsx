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



