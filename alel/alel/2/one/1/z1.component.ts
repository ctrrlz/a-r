import { Component } from '@angular/core';

@Component({
  selector: 'personal-info',
  templateUrl: `
  <div *ngIf="firstName !== '' && lastName !== ''">
  <h2>Персональная страница</h2>
  <div>
    <label>Имя: </label>
    <span>{{ firstName }}</span>
  </div>
  <div>
    <label>Фамилия: </label>
    <span>{{ lastName }}</span>
  </div>
  <div [ngSwitch]="gender">
    <label>Пол: </label>
    <span *ngSwitchCase="'Мужской'">Мужской</span>
    <span *ngSwitchCase="'Женский'">Женский</span>
    <span *ngSwitchDefault>Неизвестно</span>
  </div>
  <div>
    <label>Возраст: </label>
    <span>{{ age }}</span>
  </div>
  <div>
    <label>Город проживания: </label>
    <span>{{ city }}</span>
  </div>
  <div *ngIf="price !== null">
    <label>Цена: </label>
    <span>{{ price | currency:'USD':'symbol':'1.2-2' }}</span>
  </div>
  <div *ngIf="percent !== null">
    <label>Процент: </label>
    <span>{{ percent | percent:'1.2-2' }}</span>
  </div>
</div>

<div *ngIf="!firstName || !lastName">
  <p>Пожалуйста, введите имя и фамилию.</p>
</div>

<div *ngFor="let info of additionalInfo">
  <div>
    <label>{{ info.label }}: </label>
    <span>{{ info.value }}</span>
  </div>
</div>
  `,
})
export class PersonalComponent {
  firstName: string = 'Иван';
  lastName: string = 'Иванов';
  gender: string = 'Мужской';
  age: number = 30;
  city: string = 'Москва';
  price: number = 1234.5678;
  percent: number = 0.75;
  additionalInfo = [
    { label: 'что-то(1)', value: 'про то-то(1)' },
    { label: 'что-то(2)', value: 'про то-то(2)' }
  ];
}
