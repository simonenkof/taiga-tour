import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { BaseTourProxyAnchor } from '../core/public_api';
import { TourAnchorTuiHintDirective } from './tour-anchor.directive';

@Component({
  selector: 'tour-proxy-anchor',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  hostDirectives: [
    {
      directive: TourAnchorTuiHintDirective,
      inputs: ['tourAnchor: anchorId'],
    },
  ],
})
export class TourProxyAnchorComponent extends BaseTourProxyAnchor {
  // noinspection JSUnusedGlobalSymbols
  protected override readonly anchorDirective = inject(TourAnchorTuiHintDirective, {
    host: true,
  });

  @Input({ required: true })
  public override anchorEl: string | HTMLElement;
}
