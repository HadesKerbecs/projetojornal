import React from 'react';
import styles from './PaginaCentral.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Fotos from '../../components/Fotos';
import { cardsJornais, cardsNomes } from '../State/atom';
import { useRecoilValue } from 'recoil';

interface PaginaCentralProps {
  onAddPhoto: (id: string, photo: string) => void;
}

const PaginaCentral: React.FC<PaginaCentralProps> = ({ onAddPhoto }) => {
  const navigate = useNavigate();

  const setListaDeNomes = useRecoilValue(cardsNomes);
  const setListaDeJornais = useRecoilValue(cardsJornais)

  const EntrarGaleriaId = (id: string) => {
    navigate(`/galeria/${id}`);
  };

  const EntrarJornalId = (id: string, name: string) => {
    navigate(`/jornal/${id}`, { state: { name } });
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
          {setListaDeNomes.map((card, index) => (
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
          
          {setListaDeJornais.map((cards, index) => {
            console.log(cards)
            return(
            <div
              key={index}
              className={styles.journalCard}
              onClick={() => EntrarJornalId(cards.id, cards.name)}
            >
              {cards.name}
            </div>
            );
})}
        </div>
      </section>
      <Fotos onAddPhoto={onAddPhoto} />
    </main>
  );
};

export default PaginaCentral