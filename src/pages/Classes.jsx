import React from 'react'
import '../styles/classes.scss';
import Card from '../components/Card/Card';

let classes = [
    {"Name": "Gym", "Level": 0, "Category": "Atleta", "Photo": "https://c4.wallpaperflare.com/wallpaper/756/619/673/movie-creed-adonis-johnson-michael-b-jordan-wallpaper-preview.jpg"},
    {"Name": "Basketball", "Level": 0, "Category": "Atleta", "Photo": "https://c4.wallpaperflare.com/wallpaper/204/733/257/stephen-curry-golden-state-warriors-basketball-ball-wallpaper-preview.jpg"},
    {"Name": "Capoerista", "Level": 0, "Category": "Atleta", "Photo": "https://c4.wallpaperflare.com/wallpaper/71/841/187/beach-brazil-ceara-capoeira-wallpaper-preview.jpg"},
    {"Name": "Geek", "Level": 0, "Category": "Nerd", "Photo": "https://c4.wallpaperflare.com/wallpaper/1014/19/679/biology-books-food-laughter-wallpaper-preview.jpg"},
    {"Name": "Gamer", "Level": 0, "Category": "Nerd", "Photo": "https://wallpapercave.com/wp/wp9549760.jpg"},
    {"Name": "Leitor", "Level": 0, "Category": "Nerd", "Photo": "https://images.alphacoders.com/132/1326370.png"},
    {"Name": "Universitário", "Level": 0, "Category": "Estudante", "Photo": "https://c4.wallpaperflare.com/wallpaper/54/325/66/work-in-progress-wallpaper-preview.jpg"},
    {"Name": "Pesquisador", "Level": 0, "Category": "Estudante", "Photo": "https://c1.wallpaperflare.com/preview/238/845/300/technology-science.jpg"},
    {"Name": "Professor", "Level": 0, "Category": "Estudante", "Photo": "https://c4.wallpaperflare.com/wallpaper/1000/780/17/university-teachers-school-blackboard-wallpaper-preview.jpg"},
    {"Name": "Cientista da Computação", "Level": 0, "Category": "Tech", "Photo": "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww&w=1000&q=80"},
    {"Name": "Hacker Ativista", "Level": 0, "Category": "Tech", "Photo": "https://c4.wallpaperflare.com/wallpaper/371/264/21/itzmauuuroo-hackers-anonymous-hd-wallpaper-preview.jpg"},
    {"Name": "Data Scientist", "Level": 0, "Category": "Tech", "Photo": "https://miro.medium.com/v2/resize:fit:870/1*14v1pUZwr516557dpS-oYw.jpeg"},
    {"Name": "Viajante", "Level": 0, "Category": "Life Style", "Photo": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&w=1000&q=80"},
    {"Name": "Rolezeiro", "Level": 0, "Category": "Life Style", "Photo": "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2021/12/02/tamborim-20241873.jpg"},
    {"Name": "Turista", "Level": 0, "Category": "Life Style", "Photo": "https://images.wallpaperscraft.com/image/single/tourist_traveler_mountains_180030_1920x1080.jpg"},
    {"Name": "Personal", "Level": 0, "Category": "Personal Style", "Photo": "https://images.unsplash.com/photo-1629116165220-40f79ad68e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwY29va2luZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"},
    {"Name": "Street", "Level": 0, "Category": "Personal Style", "Photo": "https://media.istockphoto.com/id/1330558677/photo/kabukicho-shinjuku-at-night.webp?b=1&s=170667a&w=0&k=20&c=bkLg5kNnM9L0k28KLa-_lo9Dity9r0-XzK6A89d2sYE="}
  ]

function Classes() {
    return (
        <div className="classes-container">
            
            {classes.map((classe) => {
                return(
                    <Card name={classe["Name"]} level={classe["Level"]} category={classe["Category"]} photo={classe["Photo"]}/>                
                )
            })}
            
        </div>
    )
}

export default Classes