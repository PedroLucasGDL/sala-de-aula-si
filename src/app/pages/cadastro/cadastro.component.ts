import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppButtonComponent } from '../../components/app-button/app-button.component';
import { AppInputComponent } from '../../components/app-input/app-input.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    MatInputModule,
    MatIcon,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AppButtonComponent,
    AppInputComponent,
    AppInputComponent,
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    senha: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confSenha: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    protected login: LoginService,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  cadastrar() {
    console.log('click');
    if (this.form.valid) {
      const { nome, email, senha, confSenha } = this.form.value;

      this.login
        .criarNovaConta(email!, senha!, nome!)
        .then((resposxta) => {
          this.snack
            .open('Cadastro Realizado com Sucesso!', 'Ok')
            .onAction()
            .subscribe(() => {
              this.router.navigate(['login']);
            });
        })
        .catch((e) => {
          console.log(e);
          this.snack.open(e.message, 'Ok');
        });
    }
  }
}
