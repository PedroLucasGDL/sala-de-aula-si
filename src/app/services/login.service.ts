import { Injectable } from '@angular/core';
import { consumerBeforeComputation } from '@angular/core/primitives/signals';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _loading: boolean = false;
  private _usuarioLogado: any;

  constructor(private auth: AngularFireAuth) {
    auth.authState.subscribe((user) => {
      this._usuarioLogado = user;
      console.log('current user', user);
    });
  }

  async criarNovaConta(email: string, senha: string, nome: string) {
    console.log('criando novo usuairo');
    this._loading = true;
    return this.auth
      .createUserWithEmailAndPassword(email, senha)
      .then((dados) => {
        dados.user?.updateProfile({
          displayName: nome,
        });
        return new Promise((resolvida, rejeitada) => {
          resolvida(true);
        });
      })
      .finally(() => (this._loading = false));
  }

  resetarSenha(email: string) {
    this.auth.sendPasswordResetEmail(email);
  }

  autenticar(email: string, senha: string): Promise<any> {
    this._loading = true;
    return this.auth
      .signInWithEmailAndPassword(email, senha)
      .finally(() => (this._loading = false));
  }

  public get loading() {
    return this._loading;
  }
  public async isLogado() {
    console.log(this.auth.currentUser);
    this._usuarioLogado = await this.auth.authState;
    return this._usuarioLogado != null;
  }
}
