import {atom} from 'recoil';
import {IEvento} from '../interfaces/IEvento';
import {IFiltroDeEventos} from '../interfaces/IFiltroDeEventos';
import {eventosAsync} from './seletores';

// Criando um átomo - Lista de eventos
export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState', // Chave única
  // Inicialização por padrão - seletor - json server
  default: eventosAsync
});

// Atom - Filtro
export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: 'filtroDeEventos',
  default: {}
});