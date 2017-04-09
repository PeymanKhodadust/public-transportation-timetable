import * as React from "react";
import * as MobxReact from "mobx-react";

import { SearchView } from "./search-view";

import {ConnectionStore} from "../stores/connection-store";
import {MainState} from "./interfaces"

const connectionStore = new ConnectionStore();

@MobxReact.observer
export class MainComponent extends React.Component<{}, MainState> {
    constructor (props: any) {
        super(props);
    }

    render() {
        console.log("mainComponent: \nfrom: " + connectionStore.connectionInput[0] + ", to: " + connectionStore.connectionInput[1]);

        return (
            <div>
              <h1>Main Component</h1>
                <h2>from: {connectionStore.connectionInput[0]}, to: {connectionStore.connectionInput[1]}</h2>
              <SearchView store={ connectionStore }/>
            </div>
        );
    }
}
connectionStore.connectionInput[0] = "Zurich";
connectionStore.connectionInput[1] = "Bern";
