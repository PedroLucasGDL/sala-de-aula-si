import { Component } from '@angular/core';
import { AppInputComponent } from '../../components/app-input/app-input.component';
import { AppButtonComponent } from '../../components/app-button/app-button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [AppInputComponent, AppButtonComponent, ReactiveFormsModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.scss',
})
export class AlunoComponent {
  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    sobreNome: new FormControl('', [Validators.required]),
    idade: new FormControl('', [Validators.required]),
  });
}
