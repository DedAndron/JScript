interface ITransport {
    move(): void;
}
class Bus implements ITransport {
    move() {
        console.log("Bus is moving");
    }
}
let transports:Array<ITransport> = [];
transports.push(new Bus());
let bus: ITransport = new Bus();
bus.move();
