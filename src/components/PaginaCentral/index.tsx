import React from 'react';
import styles from './PaginaCentral.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Fotos from '../../components/Fotos';
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

interface PaginaCentralProps {
  onAddPhoto: (id: string, photo: string) => void;
}

const PaginaCentral: React.FC<PaginaCentralProps> = ({ onAddPhoto}) => {
  const navigate = useNavigate();

  const cards = [
    { name: "Eduardo", image: capaEduardo, id:"eduardo"},
    { name: "Gustavo", image: capaImgGustavo, id: "gustavo"},
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

  const cardsjornais = [
    { name: "Outubro 2021", id:"outubro2021"},
    { name: "Abril 2022", id:"abril2022"},
    { name: "Novembro 2022", id:"novembro2022"},
    { name: "Agosto 2024", id:"agosto2024"},
  ]

  const EntrarGaleriaId = (id: string) => {
    navigate(`/galeria/${id}`);
  };

  const EntrarJornalId = (id: string, name: string) => {
    navigate(`/jornal/${id}`, { state:{name}});
  }

  return (
    <main className={styles.pagina}>
      <section className={styles.newsSection}>
        <div className={styles.newsItem}>
          <h2>Jornal dos Brothers!</h2>
          <p>
            EXTRA! EXTRA! Isso não é um acontecimento, é um evento! <br />
            A seguir todos os acontecimentos mais relevantes ou não do grupo (e fotos).
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={5}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 25,
            },
            1440: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
            1600: {
              slidesPerView: 8,
              spaceBetween: 35,
            },
            1920: {
              slidesPerView: 9,
              spaceBetween: 40,
            }

          }}
          className={styles.imageGrid}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className={styles.imageCard}
              onClick={() => EntrarGaleriaId(card.id)}>
                <img src={card.image} alt={card.name} className={styles.cardImage} />
                <p className={styles.cardName}>{card.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={styles.monthlyJournals}>
        <h2>Jornais Mensais (ou não)</h2>
        <div className={styles.journalGrid}> 
        {cardsjornais.map((cards, index) => (
          <div
          key= {index}
          className={styles.journalCard}
          onClick={() => EntrarJornalId(cards.id, cards.name)}
            >
          {cards.name}
          </div>
        ))}        
        </div>
      </section>
      <Fotos onAddPhoto={onAddPhoto}/>
    </main>
  );
};

export default PaginaCentral