import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'skills', component: SkillsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  { path: '**', redirectTo: '' }
];
