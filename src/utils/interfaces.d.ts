export declare const enum stateEnum{
    search= 1,
    result= 2,
    detail= 3
}
export declare class ConnectionStore {
    connectionInput: string[];
    connections : any[];
    appState: stateEnum;
    detailedConnection: any;
    stationBoard: boolean;
    init(): void;
}
export declare interface MainState {appState: stateEnum}
export declare interface viewProps {
    store: ConnectionStore;
}
export declare interface ConnectionInputProps {connection: string[], stationBoard: boolean}
export declare interface ConnectionOverviewProps {connection: any, store: ConnectionStore}

