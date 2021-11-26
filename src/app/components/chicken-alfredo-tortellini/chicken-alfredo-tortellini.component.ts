import { Component } from '@angular/core';

@Component({
    selector: 'chicken-alfredo-tortellini',
    templateUrl: './chicken-alfredo-tortellini.component.html',
    styleUrls: ['./chicken-alfredo-tortellini.component.scss']
})
export class ChickenAlfredoTortelliniComponent {
    title: string = 'Chicken Alfredo Tortellini';
    imageLink: string = 'https://www.thegunnysack.com/wp-content/uploads/2016/01/Slow-Cooker-Chicken-Alfredo-Tortellini-480x480.jpg';
    description: string = 'This is a simple chicken tortellini crock-pot recipe.';
    ingredients: string[] = [
        '1.5 lbs boneless skinless chicken breast',
        '28 oz alfredo sauce',
        '1 teaspoon minced garlic',
        '½ teaspoon black pepper',
        '4 cups cheese tortellini',
    ];
    instructions: string[] = [
        'Place chicken breast in crock-pot.',
        'Add roughly half of the alfredo sauce.',
        'Cook on low for 4-6 hours.',
        'Tear the chicken with a fork.',
        'Add the rest of the alfredo sauce, garlic, pepper, and tortellini.',
        'Cook on high 15 minutes. Serve.',
    ];
    notes: string = 'As per food safety guidelines, frozen chicken breast should be thawed before being cooked in a slow cooker and you should not cook chicken breast from frozen.';
}
