import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GhostStoriesComponent } from './ghost-stories/ghost-stories.component';
import { BoardComponent } from './ghost-stories/board/board.component';
import { FieldCornerComponent } from './ghost-stories/board/field/field-corner/field-corner.component';
import { FieldPlayerComponent } from './ghost-stories/board/field/field-player/field-player.component';
import { FieldVillagerComponent } from './ghost-stories/board/field/field-villager/field-villager.component';
import { MangaCheckerComponent } from './crawler/manga-checker/manga-checker.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GhostStoriesComponent,
    BoardComponent,
    FieldCornerComponent,
    FieldPlayerComponent,
    FieldVillagerComponent,
    MangaCheckerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
