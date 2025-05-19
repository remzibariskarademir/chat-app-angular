import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  imports: [],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.css',
})
export class ChatHeaderComponent {
  @Input() selectedUser: any;
  @Input() onlineUsers: string[] = [];
  @Output() close = new EventEmitter<boolean>();

  isOnline(): boolean {
    return this.onlineUsers.includes(this.selectedUser?._id);
  }

  async onClose() {
    this.close.emit(true);
  }
}
