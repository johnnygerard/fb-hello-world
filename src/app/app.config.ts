import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "hello-world-f3218",
        appId: "1:891120082792:web:5f973e4a8cf8396bf140dd",
        storageBucket: "hello-world-f3218.appspot.com",
        apiKey: "AIzaSyDbtTIL7GSkAz2JF7dFO4V5JCVs1qP1j6c",
        authDomain: "hello-world-f3218.firebaseapp.com",
        messagingSenderId: "891120082792",
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
