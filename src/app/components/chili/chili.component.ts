import { Component } from '@angular/core';

@Component({
    selector: 'chili',
    templateUrl: './chili.component.html',
    styleUrls: ['./chili.component.scss']
})
export class ChiliComponent {
    title: string = 'Chili';
    imageLink: string = 'https://www.thisgalcooks.com/wp-content/uploads/2012/12/copy-cat-wendys-chili222.jpg';
    description: string = "This is the wendy's top secret recipe... sooo not so top secret actually.";
    ingredients: string[] = [
        '2 pounds fresh ground beef (80/20 is a good mixture)',
        '1 quart (4 cups) of tomato juice',
        'One 29 ounce can of tomato puree',
        'One 15 ounce can of dark red kidney beans, drained',
        'One 15 ounce can of small red beans, pinto beans, or pink beans, drained (I used small red beans)',
        'One medium onion, chopped (about 1½ cups)',
        '½ cup celery, diced (about one large stalk)',
        '¼ cup green bell pepper diced (one medium sized pepper, with seeds/ribs/stem removed)',
        '¼ cup (4 tablespoons) chili powder',
        '2 teaspoons ground cumin',
        '1½ teaspoons garlic powder',
        '1 teaspoon salt',
        '½ teaspoon ground black pepper',
        '½ teaspoon oregano',
        '½ teaspoon sugar',
        '⅛ teaspoon cayenne pepper',
    ];
    instructions: string[] = [
        'Brown the beef.',
        'Chop up all the vegetables.',
        'Add the vegetables to the beef and sauté.',
        'Throw everything in the crock-pot.',
        'Mix it every 30 minutes for 3 hours on low.'
    ];
    notes: string = 'You absolutely need to pre-cook the meat. Do not mess this up.';}
