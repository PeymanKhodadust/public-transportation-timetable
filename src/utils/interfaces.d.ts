export declare const enum stateEnum{
    search= 1,
    result= 2,
    detail= 3
}
export declare class ConnectionStore {
    searchInput: string[];
    searchResult : any[];
    appState: stateEnum;
    resultDetail: any;
    isStationBoard: boolean;
    isArrival: boolean;
    dateTime: Date;
    init(): void;
}
export declare interface MainState {appState: stateEnum}
export declare interface viewProps {store: ConnectionStore}
export declare interface SearchInputProps {connection: string[], isStationBoard: boolean, isArrival: boolean}
export declare interface ConnectionOverviewProps {connection: any}
export declare interface AutosuggestingInputProps {connection: string[], label: string, index: number}

