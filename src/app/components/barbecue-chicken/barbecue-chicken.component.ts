import { Component } from '@angular/core';

@Component({
    selector: 'barbecue-chicken',
    templateUrl: './barbecue-chicken.component.html',
    styleUrls: ['./barbecue-chicken.component.scss']
})
export class BarbecueChickenComponent {
    title: string = 'Barbecue Chicken';
    imageLink: string = 'https://sugarspunrun.com/wp-content/uploads/2018/02/Crock-Pot-BBQ-Chicken-Recipe-1-of-1-7-300x300.jpg';
    description: string = 'This is a simple barbecue chicken crock-pot recipe.';
    ingredients: string[] = [
        '3.5 lbs boneless skinless chicken breast', 
        '2 cups BBQ sauce', 
        '¼ cup light or dark brown sugar packed', 
        '2 tablespoons apple cider vinegar', 
        '1 tablespoon olive oil', 
        '1 teaspoon garlic powder', 
        '½ teaspoon onion powder', 
        '½ teaspoon paprika', 
        '½ teaspoon crushed red pepper'
    ];
    instructions: string[] = [
        'Combine BBQ sauce, brown sugar, apple cider vinegar, olive oil, garlic powder, onion powder, smoked paprika, and crushed red pepper in the basin of a slow cooker.',
        'Place chicken breast in sauce and use a spoon to cover with sauce.',
        'Cover and cook on low for 6-7 hours or high 3-4 hours.  Chicken is done when it is easily shredded with a pair of forks.',
        'Shred chicken and stir well to coat with BBQ sauce. Serve.',
    ];
    notes: string = 'As per food safety guidelines, frozen chicken breast should be thawed before being cooked in a slow cooker and you should not cook chicken breast from frozen.';
}
