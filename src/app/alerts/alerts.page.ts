import { Component, OnInit } from '@angular/core';
import { IonAlert } from '@ionic/angular'; // Import IonAlert if not done yet

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
  standalone: false
})
export class AlertsPage implements OnInit {

  alertButtons1 = [
    { text: 'OK', handler: () => console.log('OK clicked in Alert 1') },
    { text: 'Cancel', handler: () => console.log('Cancel clicked in Alert 1') }
  ];

  alertInputs1 = [
    { name: 'username', placeholder: 'Enter your username' },
    { name: 'email', placeholder: 'Enter your email' }
  ];

  alertButtons2 = [
    { text: 'OK', handler: () => console.log('OK clicked in Alert 2') },
    { text: 'Cancel', handler: () => console.log('Cancel clicked in Alert 2') }
  ];

  alertInputs2 = [
    { label: 'Red', type: 'radio', value: 'red' },
    { label: 'Blue', type: 'radio', value: 'blue' },
    { label: 'Green', type: 'radio', value: 'green' }
  ];

  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },
  ];

  constructor() { }

  ngOnInit() { }

}
