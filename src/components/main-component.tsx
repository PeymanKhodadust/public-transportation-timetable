import * as React from "react";
import * as MobxReact from "mobx-react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { SearchView } from "./search-view";
import { ResultView } from "./result-view";
import { DetailView } from "./detail-view";

import { ConnectionStore } from "../stores/connection-store";
import { MainState, stateEnum } from "../utils/interfaces"

const connectionStore = new ConnectionStore();

@MobxReact.observer
export class MainComponent extends React.Component<{}, {}> {
    constructor (props: any) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                {
                    connectionStore.appState === stateEnum.search ?
                        <SearchView store={ connectionStore }/> :
                        connectionStore.appState === stateEnum.result ?
                            <ResultView store={ connectionStore } /> :
                            <DetailView store={ connectionStore } />
                }
            </MuiThemeProvider>
        );
    }
}
