import { useMemo } from 'react';

interface JornalImagens {
  [key: string]: string[];
}

const carregarImagens = (grupo: number, quantidade: number): string[] => {
  return Array.from({ length: quantidade }, (_, i) => 
    require(`../../../assets/JornalDoGrupo${grupo}/Jornal${i + 1}.jpg`)
  );
};

const useJornal = () => {
  const jornalImagens: JornalImagens = useMemo(() => ({
    outubro2021: carregarImagens(1, 48),
    abril2022: carregarImagens(2, 63),
    novembro2022: carregarImagens(3, 101),
    agosto2024: carregarImagens(4, 103),
    fevereiro2025: carregarImagens(5, 130),
    marco2025: carregarImagens(6, 72)
  }), []);

  return { jornalImagens };
};

export default useJornal;
