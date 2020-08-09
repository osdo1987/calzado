import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<firebase.User>;

  constructor(public firebaseAuth: AngularFireAuth) { }

  signup(email: string, password: string):any {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string):any {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password);
  }

  forgot(email:string):any{
    return this.firebaseAuth
    .sendPasswordResetEmail(email);
  }

  logout() {
    this.firebaseAuth
      .signOut();
  }



  // Obtener el estado de autenticación
get authenticated():boolean {
  return this.user != null; // True ó False
}
// Obtener el observador del usuario actual
get currentUser(): Observable<firebase.User | null> {
  return this.user;
}
}
