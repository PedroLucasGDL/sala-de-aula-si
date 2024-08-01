import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { PublicaComponent } from './pages/publica/publica.component';

export const routes: Routes = [
  { path: '', component: PublicaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'novaconta', component: CadastroComponent },
  { path: 'inicio', component: HomeComponent, canActivate: [authGuard] },
  { path: 'aluno', component: AlunoComponent, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent },
];
