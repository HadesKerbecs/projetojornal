
import { useMemo } from 'react';

interface JornalImagens {
  [key: string]: string[];
}

const todasImagens = import.meta.glob<string>(
  '/src/assets/JornalDoGrupo*/*.jpg',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
);

const carregarImagens = (grupo: number, quantidade: number): string[] => {
  const prefixo = `/src/assets/JornalDoGrupo${grupo}/`;

  return Object.entries(todasImagens)
    .filter(([caminho]) => caminho.startsWith(prefixo))
    .sort(([a], [b]) => {
      const numeroA = Number(a.match(/Jornal(\d+)\.jpg$/)?.[1] ?? 0);
      const numeroB = Number(b.match(/Jornal(\d+)\.jpg$/)?.[1] ?? 0);

      return numeroA - numeroB;
    })
    .slice(0, quantidade)
    .map(([, imagem]) => imagem);
};

const useJornal = () => {
  const jornalImagens: JornalImagens = useMemo(
    () => ({
      outubro2021: carregarImagens(1, 48),
      abril2022: carregarImagens(2, 63),
      novembro2022: carregarImagens(3, 101),
      agosto2024: carregarImagens(4, 103),
      fevereiro2025: carregarImagens(5, 130),
      marco2025: carregarImagens(6, 72),
      // novembro2026: carregarImagens(7, 91)
    }),
    []
  );

  return { jornalImagens };
};

export default useJornal;
