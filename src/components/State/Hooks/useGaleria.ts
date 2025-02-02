import { atom, useRecoilState } from "recoil";

export interface GaleriaInterface {
  [key: string]: string[];
}

export const galeriaState = atom<GaleriaInterface>({
  key: "galeriaState",
  default: {
    gustavo: [], joaovitor: [], eduardo: [], murilo: [],
    luizfelipe: [], gabriel: [], matheus: [], wallison: [],
    kelvi: [], luizhenrique: [], lucas: [], lucas2: [],
    arthur: [], elias: [], nathan: [], jorgevitor: [],
    vinicius: [],
  },
});

const useGaleria = () => {
  const [galerias, setGalerias] = useRecoilState(galeriaState);

  const handleAddPhoto = (id: string, photo: string) => {
    setGalerias((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), photo],
    }));
  };

  return { galerias, handleAddPhoto };
};

export default useGaleria;
