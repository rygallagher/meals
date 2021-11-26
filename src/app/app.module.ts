import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

//My Components
import { BarbecueChickenComponent } from './components/barbecue-chicken/barbecue-chicken.component';
import { ChiliComponent } from './components/chili/chili.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Material Design Modules
import { ClipboardModule } from '@angular/cdk/clipboard'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RecipeTemplateComponent } from './components/recipe-template/recipe-template.component';
import { HomeComponent } from './components/home/home.component';
import { RavioliLasagnaComponent } from './components/ravioli-lasagna/ravioli-lasagna.component';
import { BeefAndBroccoliComponent } from './components/beef-and-broccoli/beef-and-broccoli.component';
import { ChickenAlfredoTortelliniComponent } from './components/chicken-alfredo-tortellini/chicken-alfredo-tortellini.component';
import { ChickenParmesanComponent } from './components/chicken-parmesan/chicken-parmesan.component';
import { SpaghettiSquashComponent } from './components/spaghetti-squash/spaghetti-squash.component';

@NgModule({
    declarations: [
        AppComponent,
        BarbecueChickenComponent,
        ChiliComponent,
        NavbarComponent,
        RecipeTemplateComponent,
        HomeComponent,
        RavioliLasagnaComponent,
        BeefAndBroccoliComponent,
        ChickenAlfredoTortelliniComponent,
        ChickenParmesanComponent,
        SpaghettiSquashComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        ClipboardModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatToolbarModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
