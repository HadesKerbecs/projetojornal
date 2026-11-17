
import React from 'react';
import { useParams } from 'react-router-dom';

import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Jornal.module.scss';
import useJornal from '../State/Hooks/useJornal';

const Jornal = () => {
  const { jornalId } = useParams<{ jornalId: string }>();
  const { jornalImagens } = useJornal();

  const images = jornalId ? jornalImagens[jornalId] || [] : [];

  return (
    <main className={styles.journalPage}>
      {images.length > 0 ? (
        <>
          <div className={styles.journalInfo}>
            <span>ARQUIVO HISTÓRICO • TROPA DO JUÍZO FINAL</span>
            <h2>Arquivo da edição</h2>
            <p>
              Explore as páginas e relembre os acontecimentos registrados.
            </p>

            <div className={styles.pageCounter}>
              <span>{images.length}</span> páginas disponíveis
            </div>
          </div>

          <div className={styles.reader}>
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              spaceBetween={20}
              slidesPerView={1}
              autoHeight={true}
              navigation
              keyboard={{ enabled: true }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className={styles.journalSwiper}
            >
              {images.map((image: string, index: number) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Página ${index + 1} do jornal`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={styles.readerFooter}>
            <span>Use as setas para navegar entre as páginas</span>
            <span>Você está lendo uma edição do arquivo da tropa.</span>
          </div>
        </>
      ) : (
        <div className={styles.emptyState}>
          <span>📰</span>
          <h2>Jornal não encontrado</h2>
          <p>Não existem páginas disponíveis para esta edição.</p>
        </div>
      )}
    </main>
  );
};

export default Jornal;
