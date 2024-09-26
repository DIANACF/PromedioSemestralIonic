import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonCard, IonCardTitle,IonCardContent, IonInput, IonButton, IonButtons,
  IonMenuButton, IonMenu, IonList, IonItem, IonLabel

 } from '@ionic/angular/standalone';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonCard, IonCardTitle,IonCardContent, IonInput, IonButton, IonButtons,
    IonMenuButton, IonMenu, IonList, IonItem, IonLabel
  ]
})
export class NotasPage implements OnInit {

  constructor(private router:Router) { }

  irAInicio() {
    this.router.navigate(['/home']);
  }

  irACrearMateria() {
    this.router.navigate(['/materias']);
  }

  ngOnInit() {
  }

}
