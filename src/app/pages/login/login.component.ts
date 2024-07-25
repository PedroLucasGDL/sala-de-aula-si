import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { AppInputComponent } from '../../components/app-input/app-input.component';
import { AppButtonComponent } from '../../components/app-button/app-button.component';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatIcon,
    MatButtonModule,
    ReactiveFormsModule,
    AppInputComponent,
    AppInputComponent,
    AppButtonComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  constructor(
    protected login: LoginService,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  entrar() {
    if (this.form.valid) {
      const { email, senha } = this.form.value;
      this.login
        .autenticar(email!, senha!)
        .then((resposta) => {
          this.router.navigate(['inicio']);
        })
        .catch((e) => {
          this.snack.open('Usuário/senha inválidos!', 'ok', {
            duration: 3000,
          });
        });
    }
  }
}
