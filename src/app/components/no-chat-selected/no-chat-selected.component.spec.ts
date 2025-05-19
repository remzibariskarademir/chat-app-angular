import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoChatSelectedComponent } from './no-chat-selected.component';

describe('NoChatSelectedComponent', () => {
  let component: NoChatSelectedComponent;
  let fixture: ComponentFixture<NoChatSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoChatSelectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoChatSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
