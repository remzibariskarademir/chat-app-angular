import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-message-skeleton',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './message-skeleton.component.html',
  styleUrl: './message-skeleton.component.css',
})
export class MessageSkeletonComponent {
  skeletonMessages = Array(6);
}
