import { Component, AfterViewInit, OnDestroy } from '@angular/core';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'blank',
    templateUrl: 'blank.template.html'
})
export class blankComponent implements AfterViewInit, OnDestroy {

    ngAfterViewInit() {
        jQuery('body').addClass('gray-bg');
    }

    ngOnDestroy() {
        jQuery('body').removeClass('gray-bg');
    }
}
