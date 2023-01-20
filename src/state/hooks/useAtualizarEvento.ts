import {useSetRecoilState} from 'recoil';
import {IEvento} from '../../interfaces/IEvento';
import {listaDeEventosState} from '../atom';

export default function useAtualizarEvento() {
  const setListaDeEventos = useSetRecoilState <IEvento[]> (listaDeEventosState);

  return (evento : IEvento) => {
    return setListaDeEventos(listaAntiga => {
      // Encontra o indice do evento na lista antiga
      const i = listaAntiga.findIndex(evt => evt.id === evento.id);
      // Pega os eventos anteriores ao i + evento atualizado + eventos posteriores
      return [...listaAntiga.slice(0, i), evento, ...listaAntiga.slice(i + 1)];
      // Não é possível fazer:
      // listaAntiga[i] = evento;
      // A lista é imutavel
    });
  };
}