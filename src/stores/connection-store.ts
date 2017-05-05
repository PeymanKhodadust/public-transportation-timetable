import * as Mobx from "mobx";
import {stateEnum} from "../utils/interfaces"

export class ConnectionStore {

    @Mobx.observable
    searchInput: string[];

    @Mobx.observable
    searchResult: any[];

    @Mobx.observable
    appState: stateEnum;

    @Mobx.observable
    resultDetail: any;

    @Mobx.observable
    isStationBoard: boolean;

    @Mobx.observable
    isArrival: boolean;

    @Mobx.observable
    dateTime: Date;


    constructor(){
        this.init();
        Mobx.autorun(() => console.log(this.report));
    }
    public init() {
        this.searchInput = ["", ""];
        this.searchResult = [];
        this.resultDetail = {};
        this.appState = stateEnum.search;
        this.isStationBoard = false;
        this.isArrival = false;
        this.dateTime = new Date();
    }
    @Mobx.computed
    public get report(): string {
        return "Object stateEnum: \n from: " + this.searchInput[0] + ", to: " + this.searchInput[1]
            /*+ "\nsearchResult: " + JSON.stringify(this.searchResult)*/;
    }
}


