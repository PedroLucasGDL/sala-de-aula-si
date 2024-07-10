import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './services/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  mensagem = '';
  emailUsuario!: string;
  senhaUsuario!: string;

  constructor(private login: LoginService) {}
  criarUsuario() {
    //    this.login.criarNovaConta('teste@gmail.com', '123456');
    //this.login.resetarSenha('fernando.oliveira@iffarroupilha.edu.br');
    this.login
      .autenticar(this.emailUsuario, this.senhaUsuario)
      .then((resposta) => {
        // sucessoi
        console.log(resposta);
        this.mensagem = 'Sucesso!!';
      })
      .catch((erro) => {
        this.mensagem = 'deu erro';
      });
  }
}
