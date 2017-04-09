export declare enum state{
    search= 1,
    result= 2,
    detail= 3
}
export declare class ConnectionStore {
    connectionInput: string[];
    fromLocation : any;
    toLocation : any;
    connections : any[];
    init(): void;
}
export declare interface MainState {state: state}
export declare interface SearchViewProps {
    store: ConnectionStore;
}
export declare interface ConnectionInputProps {connection: string[]}

