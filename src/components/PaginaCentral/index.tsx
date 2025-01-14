import React from 'react';
import styles from './PaginaCentral.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react'

const PaginaCentral = () => {
  const cards = [
    "Eduardo",
    "Gustavo",
    "Murilo",
    "João Vitor",
    "Luiz Felipe",
    "Gabriel",
    "Matheus",
    "Wallison",
    "Kelvi",
    "Luiz Henrique",
    "Lucas",
    "Vinicius",
    "Lucas2",
    "Nathan",
    "Jorge Vitor",
    "Arthur",
    "Entre Outros"
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
        spaceBetween={10}
        slidesPerView={5}
        navigation
        pagination={{}}>

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


