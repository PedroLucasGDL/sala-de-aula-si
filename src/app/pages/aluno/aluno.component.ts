import { Component, inject } from '@angular/core';
import { AppInputComponent } from '../../components/app-input/app-input.component';
import { AppButtonComponent } from '../../components/app-button/app-button.component';
import { ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../models/aluno';
import { Route, Router } from '@angular/router';
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
  
  
  constructor(protected alunoService: AlunoService, private route:Router, private activatedRoute: ActivatedRoute){
  }

salvar(){
  // Edit aluno  
    const chave = this.activatedRoute.snapshot.paramMap.get('chave')
      if (chave){
          console.log('-> chave encontrada, entrando no modo edicao')
          const aluno = this.alunoService.buscarAluno(chave).then(
            (data) => this.form.setValue(
              {
              nome: data['nome'],
              sobreNome: data['sobreNome'],
              idade: data['idade']
              })
          )
      }
    
      // Create aluno
      if(this.form.valid){
        const aluno = this.form.value as unknown as Aluno;
        console.log('-> form valido, entrando no modo criacao')
        this.alunoService.criarAluno(aluno)
        .then(()=> {
          this.route.navigateByUrl('inicio')
        } 
        );
      }
}
}
