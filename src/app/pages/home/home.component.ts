import { Component } from '@angular/core';
import { Database } from '@angular/fire/database';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AlunoService } from '../../services/aluno.service';
import { MatButtonModule } from '@angular/material/button';
import { AlunoComponent } from "../aluno/aluno.component";
import { AppButtonComponent } from "../../components/app-button/app-button.component";
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, AlunoComponent, AppButtonComponent, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  alunos?: Observable<any>;

  constructor(private alunoService: AlunoService, private route:Router) {
    this.alunos =alunoService.listarAlunos();
   
  }
  apagarAluno(chave:string){
    this.alunoService.excluirAluno(chave);
  }
  atualizarAluno(chave:string){
    this.route.navigateByUrl(`aluno/${chave}`);
  }
}
