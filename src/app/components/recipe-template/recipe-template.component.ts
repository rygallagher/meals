import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'recipe',
    templateUrl: './recipe-template.component.html',
    styleUrls: ['./recipe-template.component.scss']
})
export class RecipeTemplateComponent {
    @Input() title!: string;
    @Input() description!: string;
    @Input() ingredients!: string[];
    @Input() instructions!: string[];
    @Input() notes?: string;
    @Input() imageLink?: string;

    get copyIngredients(): string {
        return this.ingredients.join("\r\n");
    }
}
