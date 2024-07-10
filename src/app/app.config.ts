import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: 'AIzaSyCFO7A4Up9gQ6srzdtwgRSVLghwOxLl5wc',
  authDomain: 'saladeaula-d3d40.firebaseapp.com',
  databaseURL: 'https://saladeaula-d3d40-default-rtdb.firebaseio.com',
  projectId: 'saladeaula-d3d40',
  storageBucket: 'saladeaula-d3d40.appspot.com',
  messagingSenderId: '882336392778',
  appId: '1:882336392778:web:86c4238959ea05a2d5e8b3',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
  ],
};
