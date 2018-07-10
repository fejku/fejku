import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GhostStoriesComponent } from './ghost-stories/ghost-stories.component';
import { BoardComponent } from './ghost-stories/board/board.component';
import { FieldCornerComponent } from './ghost-stories/board/field/field-corner/field-corner.component';
import { PlayerComponent } from './ghost-stories/board/field/player/player.component';
import { FieldPlayerComponent } from './ghost-stories/board/field/field-player/field-player.component';
import { FieldVillagerComponent } from './ghost-stories/board/field/field-villager/field-villager.component';

@NgModule({
  declarations: [
    AppComponent,
    GhostStoriesComponent,
    BoardComponent,
    FieldCornerComponent,
    PlayerComponent,
    FieldPlayerComponent,
    FieldVillagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
