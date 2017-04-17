import * as Mobx from "mobx";

export class ConnectionStore {

    @Mobx.observable
    connectionInput: string[];

    @Mobx.observable
    fromLocation: any;

    @Mobx.observable
    toLocation: any;

    @Mobx.observable
    connections: any[];


    constructor(){
        this.init();
        Mobx.autorun(() => console.log(this.report));
    }
    public init() {
        this.connectionInput = ["", ""];
        this.fromLocation = {};
        this.toLocation = {};
    }
    @Mobx.computed
    public get report(): string {
        return "Object state: \n from: " + this.connectionInput[0] + ", to: " + this.connectionInput[1];
    }
}


