//вариант 0(задание про билла гейтса)
import { Component } from '@angular/core'

@Component({
    selector: 'bg',
    template: `
    <img src= image/billgates.jpg>
    <h1>Patience is a key element of success</h1>
    <ng-container *ngFor='let zit of zits'>
    <p>{{zit}}</p>
    </ng-container>
    <p>{{biography}}</p>
    <ul>
    <li><a>https://en.wikipedia.org/wiki/Bill_Gates;</a></li>
    <li><a>https://www.gatesfoundation.org/;</a></li>
    <li><a>https://www.gatesnotes.com/;</a></li>
    <li><a>https://twitter.com/billgates</a></li>
    </ul>
    `
})
export class BgComponent{
    zits: string[]= ["If you think your teacher is tough, wait till you get a boss",
    "Life is not fair — get used to it!",
    "Success is a lousy teacher. It seduces smart people into thinking they can’t lose",
    "Be nice to nerds. Chances are you’ll end up working for one"];
     
    biography: string = "Билл Гейтс — американский предприниматель и общественный деятель, филантроп, один из создателей и бывший крупнейший акционер компании Microsoft."
}