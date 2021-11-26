import { Component } from '@angular/core';

@Component({
    selector: 'beef-and-broccoli',
    templateUrl: './beef-and-broccoli.component.html',
    styleUrls: ['./beef-and-broccoli.component.scss']
})
export class BeefAndBroccoliComponent{    
    title: string = 'Beef and Broccoli';
    imageLink: string = 'https://i.imgur.com/KDeRBnL.jpg';
    description: string = 'This is a simple beef and broccoli recipe.';
    ingredients: string[] = [
        '2 pounds sirloin steak or boneless beef chuck roast sliced thin',
        '1 cup beef broth',
        '½ cup low sodium soy sauce',
        '¼ cup brown sugar',
        '1 tablespoon sesame oil',
        '¼ cup minced garlic',
        '4 tablespoons cornstarch',
        '4 tablespoons water',
        '12 ounces frozen broccoli florets',
        'cooked white rice to serve with (optional, not part of this recipe)',
    ];
    instructions: string[] = [
        'Brown the meat.',
        'In the crock-pot, whisk together beef broth, soy sauce, brown sugar, sesame oil, and garlic.',
        'Add the meat and stir it.',
        'Cook on low for five hours',
        'Whisk together cornstarch and water in small bowl, then pour into crock-pot and stir it.',
        'Add the frozen broccoli and stir it.',
        'Cook 30 minutes longer. Serve.'
    ];
    notes: string = 'You absolutely need to pre-cook the meat. Do not mess this up.';
}
