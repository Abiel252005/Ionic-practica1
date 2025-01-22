import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loadings',
  templateUrl: './loadings.page.html',
  styleUrls: ['./loadings.page.scss'],
  standalone: false,
})
export class LoadingsPage implements OnInit {
  constructor(private loadingController: LoadingController) {}

  ngOnInit() {}

  async showLoading(loadingId: string) {
    let loading: HTMLIonLoadingElement;
  
    switch (loadingId) {
      case 'loading1':
        loading = await this.loadingController.create({
          message: 'Dismissing after 3 seconds...',
          duration: 3000,
        });
        break;
      case 'loading2':
        loading = await this.loadingController.create({
          message: 'Loading...',
          duration: 3000,
          spinner: 'circles',
        });
        break;
      case 'loading3':
        loading = await this.loadingController.create({
          message: 'Loading...',
          duration: 3000,
          cssClass: 'custom-loading',
        });
        break;
      default:
        throw new Error('Invalid loading ID'); // Manejar casos no válidos
    }
  
    await loading.present();
  }
  
  }

