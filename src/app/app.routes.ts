import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'sobre-mi', component: AboutComponent
  },
  {
    path: 'proyectos', component: ProjectsComponent
  },
  {
    path: 'habilidades', component: SkillsComponent
  },
  {
    path: 'contacto', component: ContactComponent
  },
  { path: '**', redirectTo: '' }
];
