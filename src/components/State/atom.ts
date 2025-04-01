import { atom } from "recoil";
import capaImgGustavo from '../../assets/CapaMembros/imgGustavo/Capa.jpg';
import capaImgMurilo from '../../assets/CapaMembros/imgMurilo/Capa.jpg';
import capaImgLuizHenrique from '../../assets/CapaMembros/imgLuizHenrique/Capa.jpg';
import capaImgMatheus from '../../assets/CapaMembros/imgMatheus/Capa.jpg';
import capaImgJorgeVitor from '../../assets/CapaMembros/imgJorgeVitor/Capa.jpg';
import capaImgElias from '../../assets/CapaMembros/imgElias/Capa.jpg';
import capaWallison from '../../assets/CapaMembros/imgWallison/Capa.jpg';
import capaLuizFelipe from '../../assets/CapaMembros/imgLuizFelipe/Capa.png';
import capaEduardo from '../../assets/CapaMembros/imgEduardo/Capa.png';
import capaKelvi from '../../assets/CapaMembros/imgKelvi/Capa.png';
import capaArthur from '../../assets/CapaMembros/imgArthur/Capa.jpg';
import capaLucas2 from '../../assets/CapaMembros/imgLucas2/Capa.png';
import capaNathan from '../../assets/CapaMembros/imgNathan/Capa.jpg';
import capaGabriel from '../../assets/CapaMembros/imgGabriel/Capa.jpg';
import capaLucas from '../../assets/CapaMembros/imgLucas/Capa.jpg';
import capaJoaoVitor from '../../assets/CapaMembros/imgJoaoVitor/Capa.jpg';
import capaVinicius from '../../assets/CapaMembros/imgVinicius/Capa.jpg';

export const cardsNomes = atom({
    key: 'cardsNomes',
    default: [
        { name: "Eduardo", image: capaEduardo, id: "eduardo" },
        { name: "Gustavo", image: capaImgGustavo, id: "gustavo" },
        { name: "Murilo", image: capaImgMurilo, id: "murilo" },
        { name: "João Vitor", image: capaJoaoVitor, id: "joaovitor" },
        { name: "Luiz Felipe", image: capaLuizFelipe, id: "luizfelipe" },
        { name: "Gabriel", image: capaGabriel, id: "gabriel" },
        { name: "Matheus", image: capaImgMatheus, id: "matheus" },
        { name: "Wallison", image: capaWallison, id: "wallison" },
        { name: "Kelvi", image: capaKelvi, id: "kelvi" },
        { name: "Luiz Henrique", image: capaImgLuizHenrique, id: "luizhenrique" },
        { name: "Lucas Chaves", image: capaLucas, id: "lucaschaves" },
        { name: "Arthur", image: capaArthur, id: "arthur" },
        { name: "Elias", image: capaImgElias, id: "elias" },
        { name: "Lucas Santos", image: capaLucas2, id: "lucassantos" },
        { name: "Nathan", image: capaNathan, id: "nathan" },
        { name: "Jorge Vitor", image: capaImgJorgeVitor, id: "jorgevitor" },
        { name: "Vinicius", image: capaVinicius, id: "vinicius" }
    ]
});

export const cardsJornais = atom({
    key: 'cardsJornais',
    default: [
        { name: "Outubro 2021", id: "outubro2021" },
        { name: "Abril 2022", id: "abril2022" },
        { name: "Novembro 2022", id: "novembro2022" },
        { name: "Agosto 2024", id: "agosto2024" },
        { name: "Fevereiro 2025", id: "fevereiro2025" },
        { name: "Março 2025", id: "marco2025"}
    ]
});