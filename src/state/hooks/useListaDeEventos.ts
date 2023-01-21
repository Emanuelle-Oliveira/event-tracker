import {useRecoilValue} from 'recoil';
import {eventosFiltradosState} from '../seletores';

// Para encapsular a chamada do recoil, buscar lista
export default function useListaDeEventos() {
  // Já retorna a lista filtrada, caso tenha filtro
  return useRecoilValue(eventosFiltradosState);
}