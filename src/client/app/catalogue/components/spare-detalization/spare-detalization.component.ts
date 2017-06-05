import { Component, Input, OnInit } from '@angular/core';

import { SpareDetalization } from '../../models/index';

@Component({
    moduleId: module.id,
    selector: 'spare-detalization',
    templateUrl: 'spare-detalization.template.html',
    styleUrls: ['spare-detalization.style.css']
})

export class SpareDetalizationComponent implements OnInit {

    @Input() spareDetalization: SpareDetalization;
    ASSETS_FOLDER: string = '/assets/img/vendors/';
    ngOnInit() {
        console.log('SpareDetalizationComponent init');
     }
}
