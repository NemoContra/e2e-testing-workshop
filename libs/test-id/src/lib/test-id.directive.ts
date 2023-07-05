import { Directive, HostBinding, Input } from '@angular/core';
import { TestId, testIdAttrName } from '@e2e-testing-workshop/test-helpers';

@Directive({
  selector: '[testId]',
  standalone: true,
})
export class TestIdDirective {
  @Input() @HostBinding(`attr.${testIdAttrName}`) testId?: TestId;
}
