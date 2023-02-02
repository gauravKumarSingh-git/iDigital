export class Mobile {
    constructor(mobileId, mobileName, mobileCost, mobileType) {
      this.mobileId = mobileId;
      this.mobileName = mobileName;
      this.mobileCost = mobileCost;
      this.mobileType = mobileType;
    }
  
    printMobileDetails() {
      return console.log(
        this.mobileId + " " + this.mobileName + " " + this.mobileCost +" " + this.mobileType
      );
    }
  }
  