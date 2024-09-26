import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonCard,IonCardContent, IonCardTitle, IonInput, IonButton,
  IonButtons, IonMenuButton,IonMenu, IonList,IonItem, IonLabel, IonIcon,
  IonRouterLink, IonAlert
 } from '@ionic/angular/standalone';
 import { Router } from '@angular/router';
//import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonCard,IonCardContent,IonCardTitle, IonInput, IonButton, IonButtons,
    IonMenuButton, IonMenu, IonList,IonItem, IonLabel,IonIcon,IonRouterLink, IonAlert
  ]
})
export class MateriasPage implements OnInit {

  constructor(private router:Router) { }

  irAInicio() {
    this.router.navigate(['/home']);
  }


  ngOnInit() {
  }

}
