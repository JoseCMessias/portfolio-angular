import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { IExperiences } from '../../interfaces/IExperiences.interfaces';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Estágio Full-stack Developer',
        p: 'FOCO Aluguel de Carros | Abril 2024 - Present',
      },
      text: '<p>Desde Abril de 2024, atuo como Estágiario na Foco Aluguel de Carros, destacando-me na área de Full-Stack Developer, utilizando Html5, Css3, Javascript, TypeScript, Angular 2+, NodeJs, Postman, PostgreSQL, MySQL e MongoDB.<p/>',
    },
  ]);
}
