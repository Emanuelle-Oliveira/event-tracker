import {selector} from 'recoil';
import {filtroDeEventos, listaDeEventosState} from '../atom';

// Seletor para aplicar o filtro
// 1º parametro: key
// 2º parametro: get
export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const todosOsEventos = get(listaDeEventosState);
    const eventos = todosOsEventos.filter(evento => {
      if(!filtro.data) {
        return true; // indica para filter retornar todos os eventos
      }
      // toISOString -> coloca data no formato 2022-01-21- ...
      // slice(0,10) -> pega os 10 primeiros caracteres,
      // ou seja, só a data sem a hora
      const dataDoFiltro = filtro.data.toISOString().slice(0,10);
      const dataDoEvento = evento.inicio.toISOString().slice(0,10);
      // Compara
      const ehOMesmoDia = dataDoFiltro === dataDoEvento;
      return ehOMesmoDia;
    });
    return eventos;
  }
});

