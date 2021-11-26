import { Component } from '@angular/core';

@Component({
    selector: 'ravioli-lasagna',
    templateUrl: './ravioli-lasagna.component.html',
    styleUrls: ['./ravioli-lasagna.component.scss']
})
export class RavioliLasagnaComponent {
    title: string = 'Ravioli Lasagna';
    imageLink: string = 'https://thestayathomechef.com/wp-content/uploads/2021/03/Easy-Ravioli-Lasagna-12.jpg';
    description: string = 'This is a lifehack for making "lasagna". Also, raviolis are amazing.';
    ingredients: string[] = [
        '1 lb ground beef',
        '1 cup chopped onions',
        '¼ cup minced garlic',
        '24 oz jar of marinara',
        '25 oz frozen ravioli',
        '8 oz shredded cheese blend',
    ];
    instructions: string[] = [
        'Brown the ground beef.',
        'Add onions and garlic to the beef to sauté.',
        'Add a layer of marinara at the bottom of the crock-pot.',
        'In this order add: meat mixture, cheese, sauce, repeat.',
        'Top with extra cheese.',
        'Cook on low for 4-6 hours.',
    ];
    notes: string = 'You absolutely need to pre-cook the meat. Do not mess this up.';
}
