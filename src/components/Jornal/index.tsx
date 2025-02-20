import { useParams } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
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
    <div>
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
