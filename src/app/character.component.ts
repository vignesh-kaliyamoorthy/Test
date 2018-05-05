import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'character',
    // directives: [FavoriteDirective],
    template: `    
   <h1> {{character.name}} {{character.isFavorite}} 
    </h1>
    
    <button (click)="onlike()"> LIKE</button>
    
    `
})
export class characterComponent {
    @Input() character;
    @Output('like') like = new EventEmitter();
    
    onlike() {
        this.like.emit(this.character);
        console.log(this.character.name);
    }
}