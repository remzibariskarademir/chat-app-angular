import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSkeletonComponent } from './sidebar-skeleton.component';

describe('SidebarSkeletonComponent', () => {
  let component: SidebarSkeletonComponent;
  let fixture: ComponentFixture<SidebarSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
