import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, getDoc, doc, Firestore } from '@angular/fire/firestore';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private _collection;
  private _loading=false;

  constructor(private db: Firestore) {
    this._collection = collection(db, 'alunos');
  }

  buscarAluno(chave: string){
    // ta por aqui o erro, tem q lembrar q esse é só a referencia, tem que transformar em obj no ts
    const alunoRef = doc(this.db, 'alunos', chave);
    return getDoc(alunoRef)
  }

  listarAlunos() {
    return collectionData(this._collection, {
      idField:'IDaluno'
    });
  }

  excluirAluno(chave: string) {
    // Recupera o objeto pela chave
    const alunoRef = doc(this.db, 'alunos', chave);
    return deleteDoc(alunoRef);
  }
  async criarAluno(aluno:Aluno){
    this._loading=true;
    addDoc(this._collection, aluno ).then(()=> {
    this._loading=false;
  })    ;
  }
  get loading(){
    return this._loading;
  }
  }
