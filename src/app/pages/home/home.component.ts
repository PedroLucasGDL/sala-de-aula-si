import { Component} from '@angular/core';
import { Database } from '@angular/fire/database';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AlunoService } from '../../services/aluno.service';
import { MatButtonModule } from '@angular/material/button';
import { AlunoComponent } from "../aluno/aluno.component";
import { AppButtonComponent } from "../../components/app-button/app-button.component";
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { minutosPipe } from '../../pipes/minutos.pipe';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, AlunoComponent, AppButtonComponent, MatIcon, minutosPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  alunos?: Observable<any>;
  api?: any;

  constructor(private alunoService: AlunoService, private route:Router, private apiService: ApiService) {
    this.alunos = alunoService.listarAlunos();
  }

  apagarAluno(chave:string){
    this.alunoService.excluirAluno(chave);
  }
  atualizarAluno(chave:string){
    this.route.navigateByUrl(`aluno/${chave}`);
  }

  ngOnInit() {
    this.apiService.getData().subscribe(api => {
      this.api = api
    });
  }
}
