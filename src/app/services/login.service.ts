import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private auth: AngularFireAuth) {}

  async criarNovaConta(email: string, senha: string, nome: string) {
    console.log('criando novo usuairo');
    return this.auth
      .createUserWithEmailAndPassword(email, senha)
      .then((dados) => {
        dados.user?.updateProfile({
          displayName: nome,
        });
        return new Promise((resolvida, rejeitada) => {
          resolvida(true);
        });
      });
  }

  resetarSenha(email: string) {
    this.auth.sendPasswordResetEmail(email);
  }

  autenticar(email: string, senha: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, senha);
  }
}
