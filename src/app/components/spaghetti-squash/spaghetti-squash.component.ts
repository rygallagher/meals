import { Component } from '@angular/core';

@Component({
    selector: 'spaghetti-squash',
    templateUrl: './spaghetti-squash.component.html',
    styleUrls: ['./spaghetti-squash.component.scss']
})
export class SpaghettiSquashComponent {
    title: string = 'Spaghetti Squash';
    imageLink: string = 'https://cdn.loveandlemons.com/wp-content/uploads/2019/01/IMG_16189-580x779.jpg';
    description: string = 'A simple oven recipe for spaghetti squash.';
    ingredients: string[] = [
        '1 spaghetti squash',
        'olive oil',
        'salt',
        'pepper',
        'marinara (optional)',
    ];
    instructions: string[] = [
        'If you have to, briefly microwave the spaghetti squash in order to cut it in half.',
        'Put oil on the rim of each half of the squash.',
        'Place a sheet of foil on a baking pan.',
        'Place the squash rim-first on the pan so it lays flat.',
        'Bake 30 mins at 400°F.',
        'Remove from oven and use a fork to carve out the spaghetti.',
    ];
}
