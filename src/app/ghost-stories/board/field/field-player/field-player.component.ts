import { Component, OnInit, Input } from '@angular/core';
import { GhostStoriesService } from '../../../ghost-stories.service';

@Component({
  selector: 'app-field-player',
  templateUrl: './field-player.component.html',
  styleUrls: ['./field-player.component.css', '../field.css']
})
export class FieldPlayerComponent implements OnInit {
  @Input() boardIndex: number;
  @Input() fieldIndex: number;

  constructor(private ghostStories: GhostStoriesService) { }

  ngOnInit() {
  }

}
