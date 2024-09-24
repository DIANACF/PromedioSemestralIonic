import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent
  ,IonFab, IonFabButton,IonIcon, IonSearchbar
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonFab, IonFabButton,IonIcon, IonSearchbar
  ],
})
export class HomePage {
  constructor(private router:Router) {}

  irAMaterias() {
    this.router.navigate(['/materias']);
  }
}
