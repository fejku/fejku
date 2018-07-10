import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhostStoriesComponent } from './ghost-stories/ghost-stories.component';

const routes: Routes = [
  { path: 'ghost-stories', component: GhostStoriesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
