import { Component } from '@angular/core';

@Component({
  selector: 'chicken-parmesan',
  templateUrl: './chicken-parmesan.component.html',
  styleUrls: ['./chicken-parmesan.component.scss']
})
export class ChickenParmesanComponent {
    title: string = 'Chicken Parmesan';
    imageLink: string = 'https://www.saltandlavender.com/wp-content/uploads/2020/08/chicken-parmesan-recipe-13.jpg';
    description: string = 'This is a simple chicken parmesan crock-pot recipe.';
    ingredients: string[] = [
        '4 chicken breasts',
        '½ cup seasoned bread crumbs',
        '½ cup grated parmesan cheese',
        '½ teaspoon italian seasoning',
        '½ teaspoon pepper',
        '¼ teaspoon salt',
        '1 large egg, lightly beaten',
        '1 tablespoon water',
        '24 ounces marinara sauce',
        '4 slices mozzarella cheese',
        'Cooked pasta (optional)',
    ];
    instructions: string[] = [
        'In a bowl, combine bread crumbs, parmesan cheese, italian seasoning, pepper and salt.',
        'In a bowl, combine egg and water.',
        'Dip chicken in egg mixture, then in crumb mixture to coat both sides, patting to help coating adhere.',
        'Put chicken in crock-pot, cover with sauce.',
        'Cook on low for 4-6 hours.',
        'Top with cheese. Serve.',
    ];
    notes: string = 'As per food safety guidelines, frozen chicken breast should be thawed before being cooked in a slow cooker and you should not cook chicken breast from frozen.';
}
