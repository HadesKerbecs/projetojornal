import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Galeria.module.scss';
import axios from 'axios';
import { GaleriaInterface } from '../../pages/App';

interface GaleriaProps {
  galerias: GaleriaInterface;
}

const normalizeId = (id: string): string => {
  return id
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
};

const Galeria: React.FC<GaleriaProps> = ({ galerias }) => {
  const { galleryId } = useParams<{ galleryId: string }>();

  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      if (!galleryId) {
        setLoading(false);
        return;
      }

      const normalizedGalleryId = normalizeId(galleryId);

      setLoading(true);
      setImages([]);

      console.log(
        `Buscando imagens com prefixo: ProjetoJornal/${normalizedGalleryId}_`
      );

      try {
        const response = await axios.get(
          `https://projetojornal.onrender.com/api/images?prefix=ProjetoJornal/${normalizedGalleryId}_`
        );

        console.log('Imagens retornadas:', response.data.resources);

        const imageUrls = response.data.resources.map(
          (img: { secure_url: string }) => img.secure_url
        );

        setImages(imageUrls);

      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [galleryId]);

  const nomeIntegrante = galleryId
    ? galleryId.charAt(0).toUpperCase() + galleryId.slice(1)
    : '';

  return (
    <section className={styles.galleryContainer}>

      <div className={styles.galleryHeader}>
        <div>
          <span className={styles.eyebrow}>
            ARQUIVO FOTOGRÁFICO
          </span>

          <h1>Galeria de {nomeIntegrante}</h1>

          <p>
            Momentos, histórias e registros da Tropa do Juízo Final.
          </p>
        </div>

        {!loading && images.length > 0 && (
          <span className={styles.photoCounter}>
            {images.length} fotografias
          </span>
        )}
      </div>

      {loading ? (
        <div className={styles.emptyState}>
          <div className={styles.loader}></div>
          <p>Carregando fotografias...</p>
        </div>
      ) : images.length > 0 ? (
        <>
          <div className={styles.imageGrid}>
            {images.map((image, index) => (
              <button
                type="button"
                key={`${image}-${index}`}
                className={styles.imageCard}
                onClick={() => setSelectedImage(image)}
                aria-label={`Ampliar fotografia ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`Fotografia ${index + 1} de ${nomeIntegrante}`}
                  loading="lazy"
                />

                <span className={styles.imageOverlay}>
                  Ampliar ↗
                </span>
              </button>
            ))}
          </div>

          {selectedImage && (
            <div
              className={styles.lightbox}
              onClick={() => setSelectedImage(null)}
            >
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setSelectedImage(null)}
                aria-label="Fechar imagem"
              >
                ×
              </button>

              <img
                src={selectedImage}
                alt={`Fotografia ampliada de ${nomeIntegrante}`}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </>
      ) : (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>📷</span>
          <h2>Nenhuma fotografia encontrada</h2>
          <p>
            Ainda não existem registros disponíveis nesta galeria.
          </p>
        </div>
      )}

    </section>
  );
};

export default Galeria;
