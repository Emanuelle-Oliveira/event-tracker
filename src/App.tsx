import React, { useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import Calendario from './components/Calendario';
import ListaDeEventos from './components/ListaDeEventos';
import { RecoilRoot } from 'recoil'; // Para gerenciar estados

function App() {
  return (
    <RecoilRoot>
      <div className={style.App}>
        <div>
          <Card>
            <Formulario />
          </Card>
          <hr />
          <Card>
            <ListaDeEventos/>
          </Card>
        </div>
        <div>
          <Calendario/>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
