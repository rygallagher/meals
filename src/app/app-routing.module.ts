import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarbecueChickenComponent } from './components/barbecue-chicken/barbecue-chicken.component';
import { BeefAndBroccoliComponent } from './components/beef-and-broccoli/beef-and-broccoli.component';
import { ChickenAlfredoTortelliniComponent } from './components/chicken-alfredo-tortellini/chicken-alfredo-tortellini.component';
import { ChickenParmesanComponent } from './components/chicken-parmesan/chicken-parmesan.component';
import { ChiliComponent } from './components/chili/chili.component';
import { HomeComponent } from './components/home/home.component';
import { RavioliLasagnaComponent } from './components/ravioli-lasagna/ravioli-lasagna.component';

const routes: Routes = [
    { 
        path: 'barbecue-chicken', 
        component: BarbecueChickenComponent,
    },
    {
        path: 'beef-and-broccoli',
        component: BeefAndBroccoliComponent,
    },
    {
        path: 'chicken-and-tortellini',
        component: ChickenAlfredoTortelliniComponent,
    },
    {
        path: 'chicken-parmesan',
        component: ChickenParmesanComponent,
    },
    { 
        path: 'chili', 
        component: ChiliComponent,
    },
    {
        path: 'ravioli-lasagna',
        component: RavioliLasagnaComponent,
    },
    {
        path: '',
        component: HomeComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
