import { correctHeight, detectBody } from '../../../app.helpers';

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

declare var jQuery: any;
@Component({
    moduleId: module.id,
    selector: 'basic-selector',
    templateUrl: 'basic.template.html'
})
export class BasicComponent implements OnInit{
    ngOnInit() {
        jQuery(document).ready(function () {
            correctHeight();
            detectBody();
        });
    }
 }

