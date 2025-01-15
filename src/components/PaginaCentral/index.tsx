import React from 'react';
import styles from './PaginaCentral.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import capaImgGustavo from '../../assets/imgGustavo/Capa.jpg';
import capaImgMurilo from '../../assets/imgMurilo/Capa.jpg';
import capaImgLuizHenrique from '../../assets/imgLuizHenrique/Capa.jpg';
import capaImgMatheus from '../../assets/imgMatheus/Capa.jpg';
import capaImgJorgeVitor from '../../assets/imgJorgeVitor/Capa.jpg';
import capaImgElias from '../../assets/imgElias/Capa.jpg';
import capaWallison from '../../assets/imgWallison/Capa.jpg';
import capaLuizFelipe from '../../assets/imgLuizFelipe/Capa.png';
import capaEduardo from '../../assets/imgEduardo/Capa.png';
import capaKelvi from '../../assets/imgKelvi/Capa.png';
import capaArthur from '../../assets/imgArthur/Capa.jpg';
import capaLucas2 from '../../assets/imgLucas2/Capa.png';
import capaNathan from '../../assets/imgNathan/Capa.jpg';
import capaGabriel from '../../assets/imgGabriel/Capa.jpg';
import capaLucas from '../../assets/imgLucas/Capa.jpg';
import capaJoaoVitor from '../../assets/imgJoaoVitor/Capa.jpg'
import capaVinicius from '../../assets/imgVinicius/Capa.jpg'

const PaginaCentral = () => {
  const cards = [
    { name: "Eduardo", image: capaEduardo },
    { name: "Gustavo", image: capaImgGustavo },
    { name: "Murilo", image: capaImgMurilo },
    { name: "João Vitor", image: capaJoaoVitor },
    { name: "Luiz Felipe", image: capaLuizFelipe },
    { name: "Gabriel", image: capaGabriel },
    { name: "Matheus", image: capaImgMatheus },
    { name: "Wallison", image: capaWallison },
    { name: "Kelvi", image: capaKelvi },
    { name: "Luiz Henrique", image: capaImgLuizHenrique },
    { name: "Lucas", image: capaLucas },
    { name: "Arthur", image: capaArthur },
    { name: "Elias", image: capaImgElias },
    { name: "Lucas2", image: capaLucas2 },
    { name: "Nathan", image: capaNathan },
    { name: "Jorge Vitor", image: capaImgJorgeVitor },
    { name: "Vinicius", image: capaVinicius }
  ]
  return (
    <main className={styles.pagina}>
      <section className={styles.newsSection}>
        <div className={styles.newsItem}>
          <h2>Jornal dos Brothers!</h2>
          <p>
            EXTRA! EXTRA! Isso não é um acontecimento, é um evento! <br />
            A seguir todos os acontecimentos mais relevantes ou não do grupo.
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
              <div className={styles.imageCard}>
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
          <div className={styles.journalCard}>Outubro 2021</div>
          <div className={styles.journalCard}>Abril 2022</div>
          <div className={styles.journalCard}>Novembro 2022</div>
          <div className={styles.journalCard}>Agosto 2024</div>
        </div>
      </section>
    </main>
  );
};

export default PaginaCentral;


