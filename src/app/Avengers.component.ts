import {Component}  from '@angular/core';

@Component({
    selector: 'avenger',
    
    template: `   
    <div>{{name}} </div> 
    <input type="text" [(ngModel)]="name">


<button (click)="Add()">ADD HERO </button>
    <div *ngFor="let c of avengers">
    <character [character]="c" (like)="dolike($event)"></character>
   
    </div>
    `
})
export class AvengerComponet{

    name:string="";
avengers=[
{name:"Iron Man",isFavorite:":)"},
{name:"Hulk",isFavorite:":)"}


];
Add()
{
 this.avengers.push({name:this.name,isFavorite:""})
}
dolike(character)
{
    character.isFavorite=character.isFavorite+":)";
    console.log(character.name+ character.isFavorite);
}

}