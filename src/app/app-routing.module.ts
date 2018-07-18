import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhostStoriesComponent } from './ghost-stories/ghost-stories.component';
import { MangaCheckerComponent } from './crawler/manga-checker/manga-checker.component';

const routes: Routes = [
  { path: 'ghost-stories', component: GhostStoriesComponent },
  { path: 'crawler', component: MangaCheckerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
