import { Component } from '@angular/core';
import { Database } from '@angular/fire/database';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  alunos?: Observable<any>;

  constructor(private db: Firestore) {
    const itemCollection = collection(db, 'alunos');
    this.alunos = collectionData(itemCollection);
  }
}
