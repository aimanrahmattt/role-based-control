import { Directive, ElementRef, Input, OnDestroy, Renderer2, RendererStyleFlags2, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccessControlService } from '../services/access-control/access-control.service';
import { Subject } from 'rxjs';

@Directive({
  selector: '[acIf]'
})
export class AccessibleDirective implements OnDestroy {
  currentRole: string = '';
  onDestroy$ = new Subject();

  constructor(
    private accessService: AccessControlService,
    private renderer: Renderer2,
    private el: ElementRef,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
  }

  @Input()
  set acIf(role: string) {
    if(this.accessService.hasRole(role) || this.accessService.hasAllPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  // hideElement() {
  //   this.renderer.setStyle(this.el?.nativeElement, 'display', 'none', RendererStyleFlags2.Important);
  // }

  ngOnDestroy(): void {
    this.onDestroy$.next('');
    this.onDestroy$.complete();
    this.onDestroy$.unsubscribe();
  }

}
