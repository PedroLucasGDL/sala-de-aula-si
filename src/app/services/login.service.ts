import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private auth: AngularFireAuth) {}

  criarNovaConta(email: string, senha: string) {
    console.log('criando novo usuairo');
    this.auth.createUserWithEmailAndPassword(email, senha);
  }

  resetarSenha(email: string) {
    this.auth.sendPasswordResetEmail(email);
  }

  autenticar(email: string, senha: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, senha);
  }
}
