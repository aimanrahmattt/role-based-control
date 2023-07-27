import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, RendererStyleFlags2, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccessControlService } from '../services/access-control/access-control.service';
import { Subject } from 'rxjs';

@Directive({
  selector: '[acIf]'
})
export class AccessibleDirective implements OnInit, OnDestroy {
  @Input("acIf") role: string = '';
  @Input("acIfElse") unauthorized?: TemplateRef<any>;

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
  
  ngOnInit(): void {
    if (this.accessService.hasRole(this.role) || this.accessService.hasAllPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (this.unauthorized) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.unauthorized);
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
