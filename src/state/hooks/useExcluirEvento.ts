import {useSetRecoilState} from 'recoil';
import {IEvento} from '../../interfaces/IEvento';
import {listaDeEventosState} from '../atom';

export default function() {
  // Hook para setar lista de eventos do recoil
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento : IEvento) => {
    return setListaDeEventos(listaAntiga =>
      listaAntiga.filter(evt => evt.id !== evento.id));
  };
}