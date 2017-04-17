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
        return (
            <div>
                <h1>Main Component</h1>
                <SearchView store={ connectionStore }/>
            </div>
        );
    }
}
