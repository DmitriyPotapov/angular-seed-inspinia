import { Spare } from './spare.model';
import { SpareProperty }from './spare-property.model';

export interface SpareDetalization {
    spare: Spare;
    spareProperty: SpareProperty[];
}
