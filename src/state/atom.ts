import {atom} from 'recoil';
import {IEvento} from '../interfaces/IEvento';

// Criando um átomo
export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState', // Chave única
  // Inicialização por padrão
  default: [{
    'descricao': 'Estudar React',
    'inicio': new Date('2023-01-21T09:00'),
    'fim': new Date('2023-01-21T13:00'),
    'completo': false,
    'id': 1642342747
  },
  {
    'descricao': 'Estudar Recoil',
    'inicio': new Date('2023-01-22T09:00'),
    'fim': new Date('2023-01-22T11:00'),
    'completo': false,
    'id': 1642342959
  }]
});