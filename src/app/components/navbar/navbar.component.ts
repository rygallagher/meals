import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    routes = new Map([
        ['barbecue-chicken', 'Barbecue Chicken'],
        ['beef-and-broccoli', 'Beef and Broccoli'],
        ['chicken-and-tortellini', 'Chicken and Tortellini'],
        ['chicken-parmesan', 'Chicken Parmesan'],
        ['chili', 'Chili'],
        ['ravioli-lasagna', 'Ravioli Lasagna'],
    ]);

    filteredRoutes: Map<string, string> = this.routes;
    sidenavOpen = true;
    recipeSearchForm = this.searchForm();

    constructor(
        private router: Router,
    ) {
        this.recipeSearchForm.controls.recipe.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged(),
        ).subscribe((input: any) => {       
            if (input) {
                this.filteredRoutes = new Map([]);
                
                this.routes.forEach((value: string, key: string) => {
                    if (value.toLowerCase().includes(input.toLowerCase())) {
                        this.filteredRoutes?.set(key, value);
                    }
                });
            } else {
                this.filteredRoutes = this.routes;
            }          
        });
    }

    returnHome(): void {
        this.router.navigate(['']);
    }

    private searchForm(): FormGroup {
        return new FormGroup({
            recipe: new FormControl(''),
        })
    }
}
