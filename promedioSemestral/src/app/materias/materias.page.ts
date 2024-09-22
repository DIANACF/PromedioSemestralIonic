import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonCard,IonCardContent, IonCardTitle, IonInput, IonButton,
  IonButtons, IonMenuButton,IonMenu, IonList,IonItem, IonLabel, IonIcon,
  IonRouterLink
 } from '@ionic/angular/standalone';
//import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonCard,IonCardContent,IonCardTitle, IonInput, IonButton, IonButtons,
    IonMenuButton, IonMenu, IonList,IonItem, IonLabel,IonIcon,IonRouterLink
  ]
})
export class MateriasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
