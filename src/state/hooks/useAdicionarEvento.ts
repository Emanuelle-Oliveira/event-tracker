import {useRecoilValue, useSetRecoilState} from 'recoil';
import {IEvento} from '../../interfaces/IEvento';
import {listaDeEventosState} from '../atom';
import {obterId} from '../../util';

export default function () {
  // Hook para setar lista de eventos do recoil
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return ((evento: IEvento) => {
    const hoje = new Date();
    // Validar poara que a data de inicio seja maior que a atual
    if(evento.inicio < hoje) {
      throw new Error('Eventos não podem ser cadastrados com data menor que a atual!');
    }
    // Adiciona id ao evento
    evento.id = obterId();
    // Adiciona o evento a lista
    return setListaDeEventos(listaAntiga => [...listaAntiga, evento]);
    /*
   * function (listaAntiga: IEvento []) {
   *   return [...listaAntiga, evento];
   * }
   * */
  });

}