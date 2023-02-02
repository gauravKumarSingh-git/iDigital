import {Mobile} from './Mobile';
export class SmartPhone extends Mobile{
    constructor(mobileId, mobileName,mobileCost,mobileType){
        super(mobileId,mobileName, mobileCost,"Smart");
    }
}