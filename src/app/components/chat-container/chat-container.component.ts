import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { MessageSkeletonComponent } from '../../skeletons/message-skeleton/message-skeleton.component';
import { CommonModule } from '@angular/common';
import { MessageInputComponent } from '../message-input/message-input.component';

@Component({
  selector: 'app-chat-container',
  imports: [
    ChatHeaderComponent,
    MessageSkeletonComponent,
    CommonModule,
    MessageInputComponent,
  ],
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.css',
})
export class ChatContainerComponent implements OnInit, AfterViewInit {
  @Input() user: any;
  @Input() onlineUsers: string[] = [];
  @Input() messages: any[] = [
    {
      senderId: '2',
      fullName: 'Kadir Can Karademir',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'Merhaba, nasılsın?',
      createdAt: '2023-10-01T12:00:00Z',
      image: 'https://img.daisyui.com/images/profile/demo/batperson@192.webp',
    },
    {
      senderId: '3',
      fullName: 'Anıl',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'İyi ne olsun takılıyok işte',
      createdAt: '2023-10-01T12:05:00Z',
      image:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
    },
    {
      senderId: '2',
      fullName: 'Kadir Can Karademir',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'Merhaba, nasılsın?',
      createdAt: '2023-10-01T12:00:00Z',
    },
    {
      senderId: '3',
      fullName: 'Anıl',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'İyi ne olsun takılıyok işte',
      createdAt: '2023-10-01T12:05:00Z',
    },
    {
      senderId: '2',
      fullName: 'Kadir Can Karademir',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'Merhaba, nasılsın?',
      createdAt: '2023-10-01T12:00:00Z',
    },
    {
      senderId: '3',
      fullName: 'Anıl',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'İyi ne olsun takılıyok işte',
      createdAt: '2023-10-01T12:05:00Z',
    },
    {
      senderId: '2',
      fullName: 'Kadir Can Karademir',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'Merhaba, nasılsın?',
      createdAt: '2023-10-01T12:00:00Z',
    },
    {
      senderId: '3',
      fullName: 'Anıl',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'İyi ne olsun takılıyok işte',
      createdAt: '2023-10-01T12:05:00Z',
    },
    {
      senderId: '2',
      fullName: 'Kadir Can Karademir',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'Merhaba, nasılsın?',
      createdAt: '2023-10-01T12:00:00Z',
    },
    {
      senderId: '3',
      fullName: 'Anıl',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'İyi ne olsun takılıyok işte',
      createdAt: '2023-10-01T12:05:00Z',
    },
    {
      senderId: '2',
      fullName: 'Kadir Can Karademir',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'Merhaba, nasılsın?',
      createdAt: '2023-10-01T12:00:00Z',
    },
    {
      senderId: '3',
      fullName: 'Anıl',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'İyi ne olsun takılıyok işte',
      createdAt: '2023-10-01T12:05:00Z',
    },
    {
      senderId: '2',
      fullName: 'Kadir Can Karademir',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'Merhaba, nasılsın?',
      createdAt: '2023-10-01T12:00:00Z',
    },
    {
      senderId: '3',
      fullName: 'Anıl',
      profilePic:
        'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      name: 'Kadir Can Karademir',
      text: 'İyi ne olsun takılıyok işte',
      createdAt: '2023-10-01T12:05:00Z',
    },
  ];
  @Input() authUser: any = {
    _id: '3',
    fullName: 'Anıl',
    profilePic:
      'https://img.daisyui.com/images/profile/demo/batperson@192.webp',
    name: 'Anıl',
  };

  @Output() close = new EventEmitter<void>();

  @ViewChild('messageEnd') messageEndRef!: ElementRef<HTMLDivElement>;

  isLoading = false;

  async ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
      this.scrollToBottom();
    }, 2000);
  }

  async ngAfterViewInit() {
    this.scrollToBottom();
  }

  async ngOnChanges() {
    this.scrollToBottom();
  }

  async scrollToBottom() {
    console.log('scrollToBottom');
    setTimeout(() => {
      if (this.messageEndRef) {
        this.messageEndRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  async onClose($event: any) {
    this.close.emit();
  }

  formatMessageTime(dateStr: string) {
    return new Date(dateStr).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
