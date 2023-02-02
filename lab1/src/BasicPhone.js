import {Mobile} from './Mobile';
export class BasicPhone extends Mobile{
    constructor(mobileId, mobileName,mobileCost){
        super(mobileId,mobileName, mobileCost,"Basic");

    }
}