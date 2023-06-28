    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.fuel = Number(fuel);
            this.parts.quality = parts.engine * parts.power;
        }
         drive(a) {
            this.fuel -= a;
        }
    }
