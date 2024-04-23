import { Component } from '@angular/core'
import {Property} from './app.interface'

@Component({
    selector: 'app-root',
    template: ['app.component.html']
})
export class PropertyComponent{
property: Property[]=[];
mostExp: Property;
cheap: Property;
averagePriceRoom: number = 0;
totalPropertiesCount: number = 0;
averagePrice:number = 0;

constructor(){
    const cities = ['Минск', 'Брест', 'Гомель', 'Витебск', 'Могилёв'];
    const types = ['Квартира', 'Дом', 'Участок'];
    const windows = ['Во двор', 'На дорогу', 'везде'];
    this.property = [{ 
        title: "Property",
        price: Math.floor(Math.random()*1000000),
        rooms: Math.floor(Math.random()*10),
        totalArea: Math.floor(Math.random()*10000),
        livingArea: Math.floor(Math.random()*10000),
        city: cities[Math.floor(Math.random()*cities.length)],
        type: types[Math.floor(Math.random()*types.length)],
        floor: Math.floor(Math.random()*50),
        floors: Math.floor(Math.random()*50),
        lift: Math.random() < 0.5,
        window: windows[Math.floor(Math.random()*windows.length)],
        gaz: Math.random() < 0.5 ? 'газ':'электроплита'
    }]
    }
    calculate():void{
        this.mostExp = this.property[0]
        for(let i = 1; i<this.property.length; i++){
            if(this.property[i].price> this.mostExp.price){
                this.mostExp = this.property[i]
            }
        }
        this.cheap = this.property[0]
        for(let i = 1; i<this.property.length; i++){
            if(this.property[i].price< this.cheap.price){
                this.cheap = this.property[i]
            }
        }
    }
    showAveragePriceRoom(room:number): void{
        const filteredProperties = this.property.filter(property => property.rooms===room);
        let totalPrices = 0;
        for(const property of filteredProperties){
            totalPrices += property.price;
        }
        const averagePrice = totalPrices / filteredProperties.length;
        this.averagePriceRoom = averagePrice;
    }
    showTotalPropertiesCount(): void{
        this.totalPropertiesCount = this.property.length;
    }
    showAveragePrice(): void{
        let totalPrices = 0;
        for(const property of this.property){
            totalPrices += property.price;
        }
        const averagePrice = totalPrices / this.property.length;
        this.averagePrice = averagePrice;
    }
}
}