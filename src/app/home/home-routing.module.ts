import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';

const routes: Routes = [
  
  {
    path: '',
		children: [
			{
				path: '',
				component: HomeComponent,
			},
      {
        path: 'portfolio-details/:id',
        component: PortfolioDetailsComponent,
      },
		]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
