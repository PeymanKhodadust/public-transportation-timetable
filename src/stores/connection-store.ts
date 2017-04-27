import * as Mobx from "mobx";
import {stateEnum} from "../utils/interfaces"

export class ConnectionStore {

    @Mobx.observable
    connectionInput: string[];

    @Mobx.observable
    connections: any[];

    @Mobx.observable
    appState: stateEnum;

    @Mobx.observable
    detailedConnection: any;

    @Mobx.observable
    stationBoard: boolean;


    constructor(){
        this.init();
        Mobx.autorun(() => console.log(this.report));
    }
    public init() {
        this.connectionInput = ["", ""];
        this.appState = stateEnum.search;
        this.stationBoard = false;
    }
    @Mobx.computed
    public get report(): string {
        return "Object stateEnum: \n from: " + this.connectionInput[0] + ", to: " + this.connectionInput[1]
            /*+ "\nconnections: " + JSON.stringify(this.connections)*/;
    }
}


