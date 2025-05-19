import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.css',
})
export class MessageInputComponent {
  text = '';
  imagePreview: string | null = null;

  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;
  @Output() sendMessage = new EventEmitter<{
    text: string;
    image: string | null;
  }>();

  async handleImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  async removeImage() {
    this.imagePreview = null;
    if (this.fileInputRef) this.fileInputRef.nativeElement.value = '';
  }

  async onSendMessage(event: Event) {
    event.preventDefault();
    if (!this.text.trim() && !this.imagePreview) return;
    this.sendMessage.emit({
      text: this.text.trim(),
      image: this.imagePreview,
    });
    this.text = '';
    this.imagePreview = null;
    if (this.fileInputRef) this.fileInputRef.nativeElement.value = '';
  }
}
