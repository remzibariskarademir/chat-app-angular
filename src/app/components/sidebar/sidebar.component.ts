import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarSkeletonComponent } from '../../skeletons/sidebar-skeleton/sidebar-skeleton.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarSkeletonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  @Output() userSelected = new EventEmitter<any>();
  @Output() onlineUsersChanged = new EventEmitter<string[]>();

  isLoading = true;
  showOnlineOnly = false;
  onlineUsers: string[] = ['1']; // id dizisi
  users = [
    {
      _id: '1',
      fullName: 'Remzi Barış Karademir',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/batperson@192.webp',
      name: 'Remzi Barış Karademir',
    },
    {
      _id: '2',
      fullName: 'Kadir Can Karademir',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
    },
  ];
  selectedUser: any = null;

  async ngOnInit() {
    // Simulate loading
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  get filteredUsers() {
    return this.showOnlineOnly
      ? this.users.filter((u) => this.onlineUsers.includes(u._id))
      : this.users;
  }

  async setSelectedUser(user: any) {
    this.selectedUser = user;
    this.userSelected.emit(user);
    this.onlineUsersChanged.emit(this.onlineUsers);
  }
}
