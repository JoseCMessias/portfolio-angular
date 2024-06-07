import { Component, inject, signal } from '@angular/core';

// interface
import { IProjects } from '../../interfaces/IProjects.interfaces';

// angular material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

// enum
import { EDialogPanelClass } from '../../enums/EDialogPanelClass.enum';

// dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/biblioteca.png',
      alt: 'Sistema de cadastro de uma biblioteca',
      title: 'Biblioteca',
      width: '100px',
      height: '51px',
      description: '<p>Desenvolvimento de um sistema completo CRUD para gerenciamento de autores, editoras e livros em uma biblioteca. Esta aplicação abrange as tecnologias Angular para o frontend, Node.js para o backend e PostgreSQL para o banco de dados.<p/>',
      links: [
        {
          name: 'Conheça o projeto no Github',
          href: 'https://github.com/JoseCMessias/biblioteca-angular.git'
        },
      ],
    },
    {
      src: 'assets/img/projects/acessoDB.png',
      alt: 'Acessor privativo usando JWT',
      title: 'Acesso DB',
      width: '100px',
      height: '51px',
      description: '<p>A integração entre back-end e front-end é essencial no desenvolvimento de aplicativos web e móveis, permitindo a comunicação eficaz e a transferência de dados entre o servidor (back-end) e o cliente (front-end). No nosso projeto, utilizamos Node.js e MongoDB para integrar páginas de cadastro e login. Após o login, os usuários acessam uma página privativa. Isso assegura um funcionamento eficiente e proporciona uma experiência de usuário suave.<p/>',
      links: [
        {
          name: 'Conheça o projeto no Github',
          href: 'https://github.com/JoseCMessias/acesso-db'
        },
      ],
    },
    {
      src: 'assets/img/projects/algCar.png',
      alt: 'Projeto de uma locadora de carros',
      title: 'ALG CAR',
      width: '100px',
      height: '51px',
      description: '<p>O site ALG CAR é o resultado de um projeto proposto pelo curso da Alicerce Educação como projeto final. Nesse empreendimento, desenvolvemos um sistema voltado para o cliente, que oferece funcionalidades essenciais, tais como a capacidade de adicionar, listar, editar e excluir informações. Nessa aplicação foi usado o Local Storage do navegado para armazenamento e manipulação dos dados.<p/>',
      links: [
        {
          name: 'Conheça o projeto no Github',
          href: 'https://github.com/JoseCMessias/alg-car'
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }
}
