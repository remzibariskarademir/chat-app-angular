import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-skeleton',
  imports: [CommonModule],
  templateUrl: './sidebar-skeleton.component.html',
  styleUrl: './sidebar-skeleton.component.css',
})
export class SidebarSkeletonComponent {
  skeletonContacts = Array(9);
}
