import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { Page1Component } from './app/page1/page1.component';
import { Page2Component } from './app/page2/page2.component';
import { Page3Component } from './app/page3/page3.component';
import { PageWithCardsComponent } from './app/page-with-cards/page-with-cards.component';

const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full' },
  { path: 'page1', component: Page1Component, data: { title: 'Lorem Ipsum Long (1)' } },
  { path: 'page2', component: Page2Component, data: { title: 'Lorem Ipsum Short (2)' } },
  { path: 'page3', component: Page3Component, data: { title: 'Lorem Ipsum Medium (3)' } },
  { path: 'page-with-cards', component: PageWithCardsComponent, data: { title: 'Page With Cards' } },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }