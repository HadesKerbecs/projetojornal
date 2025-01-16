import { useParams } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Jornal.module.scss';
import Cabecalho3 from '../../components/Cabecalho/CabecalhoFJ2';

const imagensImportadas: string[] = [];
const imagensImportadas2: string[] = [];
const imagensImportadas3: string[] = [];
const imagensImportadas4: string[] = [];

interface JornalImagens {
  [key: string]: string[];
}

for (let i = 1; i <= 48; i++) {
  imagensImportadas.push(require(`../../assets/JornalDoGrupo1/Jornal${i}.jpg`));
}
for (let i = 1; i <= 63; i++) {
  imagensImportadas2.push(require(`../../assets/JornalDoGrupo2/Jornal${i}.jpg`));
}
for (let i = 1; i <= 101; i++) {
  imagensImportadas3.push(require(`../../assets/JornalDoGrupo3/Jornal${i}.jpg`));
}
for (let i = 1; i <= 103; i++) {
  imagensImportadas4.push(require(`../../assets/JornalDoGrupo4/Jornal${i}.jpg`));
}

const Jornal = () => {
  const { jornalId } = useParams<{ jornalId: string }>();

  const jornalImagens: JornalImagens = {
    outubro2021: [...imagensImportadas],
    abril2022: [...imagensImportadas2],
    novembro2022: [...imagensImportadas3],
    agosto2024: [...imagensImportadas4],
  };
  const images = jornalId ? jornalImagens[jornalId] || [] : [];

  return (
    <div>
      <Cabecalho3 />
      <div className={styles.journalPage}>
        {images.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            navigation
            breakpoints={{
              320: { slidesPerView: 1},
              480: { slidesPerView: 1},
              768: { slidesPerView: 1},
              1024: { slidesPerView: 1},
              1440: { slidesPerView: 1},
            }}
          >
            {images.map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <div className={styles.imageCard}>
                  <img
                    src={image}
                    alt="Placeholder para Jornal" 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className={styles.noImages}>Nenhuma imagem disponível para este jornal.</p>
        )}
      </div>
    </div>
  );
};

export default Jornal;
