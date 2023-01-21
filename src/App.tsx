import React, {Suspense, useState} from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import Calendario from './components/Calendario';
import ListaDeEventos from './components/ListaDeEventos';
import { RecoilRoot } from 'recoil'; // Para gerenciar estados
import DebugObserver from './components/DebugObserver';

function App() {
  return (
    <RecoilRoot>
      <DebugObserver></DebugObserver>
      {/* Recoil utiliza esse recurso para chamada http */}
      <Suspense fallback="Estar carregando">
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
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
