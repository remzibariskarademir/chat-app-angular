import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoChatSelectedComponent } from '../../components/no-chat-selected/no-chat-selected.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ChatContainerComponent } from '../../components/chat-container/chat-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NoChatSelectedComponent,
    SidebarComponent,
    ChatContainerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  noChatSelected = true;
  user: any = null;
  onlineUsers: string[] = []; 

  async onUserSelected(event: any) {
    this.user = event;
    this.noChatSelected = false;
  }

  async onOnlineUsersChanged(event: string[]) {
    this.onlineUsers = event;
  }

  async onCloseChat() {
    this.user = null;
    this.noChatSelected = true;
  }
}
