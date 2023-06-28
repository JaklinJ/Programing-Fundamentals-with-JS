
class Laptop {
    
    constructor (info, quality) {
        this.info = info;
        this.quality = quality;
        
    }
    isOn = false;
    
    turnOn() {
        this.isOn = true;
        this.quality -= 1;
        return this.isOn;
    }
    
    turnOff() {
        this.isOn = false;
        this.quality -= 1;
        return this.isOn;
    }
   
    showInfo() {
       return JSON.stringify(this.info);
        
    }
   
    get price() {
    return 800 - (this.info.age * 2) + (this.quality * 0.5);
   }

}
