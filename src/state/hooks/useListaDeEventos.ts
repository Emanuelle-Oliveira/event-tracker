import {useRecoilValue} from 'recoil';
import {listaDeEventosState} from '../atom';

// Para encapsular a chamada do recoil, buscar lista
export default function useListaDeEventos() {
  return useRecoilValue(listaDeEventosState);
}