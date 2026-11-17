
import React from 'react';
import styles from './PaginaCentral.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Fotos from '../../components/Fotos';
import { cardsJornais, cardsNomes } from '../State/atom';
import bannerNoticias from '../../assets/banner/bannerNoticias.jpg';

interface PaginaCentralProps {
  onAddPhoto: (id: string, photo: string) => void;
}

const PaginaCentral: React.FC<PaginaCentralProps> = ({ onAddPhoto }) => {
  const navigate = useNavigate();

  const listaDeNomes = useRecoilValue(cardsNomes);
  const listaDeJornais = useRecoilValue(cardsJornais);

  const entrarGaleria = (id: string) => {
    navigate(`/galeria/${id}`);
  };

  const entrarJornal = (id: string, name: string) => {
    navigate(`/jornal/${id}`, { state: { name } });
  };

  return (
    <main className={styles.pagina}>

      {/* Apresentação */}
      <section className={styles.hero} id="inicio">
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            TROPA DO JUÍZO FINAL • CENTRAL DE NOTÍCIAS E FOTOS
          </span>

          <h1>Jornal dos Brothers!</h1>

          <p>
            EXTRA! EXTRA! Isso não é um acontecimento, é um evento!
            <br />
            Aqui ficam registrados os acontecimentos mais relevantes
            ou não do grupo, além das histórias e fotografias.
          </p>

          <button
            type="button"
            className={styles.heroButton}
            onClick={() =>
              document.getElementById('edicoes')?.scrollIntoView({
                behavior: 'smooth'
              })
            }
          >
            Explorar edições
            <span>↗</span>
          </button>
        </div>

        <div className={styles.heroVisual}>
          <img
            src={bannerNoticias}
            alt="Destaque do Jornal da Tropa"
          />
        </div>
      </section>

      {/* Integrantes */}
      <section className={styles.membersSection} id="integrantes">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>
              QUEM FAZ PARTE DA HISTÓRIA
            </span>

            <h2>Os integrantes</h2>

            <p>
              Conheça os personagens por trás das nossas manchetes.
              Ao clicar na foto, serão apresentadas as imagens salvas.
            </p>
          </div>

          <span className={styles.counter}>
            {listaDeNomes.length} integrantes
          </span>
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
          {listaDeNomes.map((card) => (
            <SwiperSlide key={card.id}>
              <div
                className={styles.imageCard}
                onClick={() => entrarGaleria(card.id)}
                role="button"
                tabIndex={0}
                aria-label={`Abrir galeria de ${card.name}`}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    entrarGaleria(card.id);
                  }
                }}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className={styles.cardImage}
                />

                <p className={styles.cardName}>
                  {card.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Edições */}
      <section className={styles.journalsSection} id="edicoes">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>
              ARQUIVO DA REDAÇÃO
            </span>

            <h2>Edições do Jornal</h2>

            <p>
              Relembre as publicações de acontecimentos que marcaram
              as edições da TJF.
            </p>
          </div>

          <span className={styles.counter}>
            {listaDeJornais.length} edições
          </span>
        </div>

        <div className={styles.journalGrid}>
          {listaDeJornais.map((jornal) => (
            <button
              type="button"
              key={jornal.id}
              className={styles.journalCard}
              onClick={() => entrarJornal(jornal.id, jornal.name)}
            >
              <span className={styles.journalIcon}>
                📰
              </span>

              <span className={styles.journalInfo}>
                <strong>{jornal.name}</strong>
                <small>Consultar edição</small>
              </span>

              <span className={styles.journalArrow}>
                ↗
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Upload de fotografias */}
      <section className={styles.uploadSection} id="fotos">
        <Fotos onAddPhoto={onAddPhoto} />
      </section>

    </main>
  );
};

export default PaginaCentral;
