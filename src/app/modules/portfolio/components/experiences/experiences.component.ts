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
        p: 'DUO Technology | Abril 2024 - Outubro 2024',
      },
      text: '<p>De abril de 2024 a outubro de 2024, atuei como Estagiário na DUO Technology, destacando-me na área de Full-Stack Developer, utilizando HTML5, CSS3, JavaScript, TypeScript, Angular 2+, Node.js, Postman, PostgreSQL, MySQL e MongoDB.</p>',
    },
    {
      summary: {
        strong: 'Trainee Software Developer',
        p: 'DUO Technology | Outubro 2024 - Present',
      },
      text: '<p>Desde Outubro de 2024, atuo como Trainee na DUO Technology, destacando-me na área de Software Developer, utilizando Javascript, TypeScript, Angular, Node, Postman, PostgreSQL, Low-Code, No-Code e Mendix Studio Pro.<p/>',
    },
  ]);
}
