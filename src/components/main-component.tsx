import * as React from "react";

import { SearchView } from "./search-view";

export interface MainProps {}

export interface MainState {}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class MainComponent extends React.Component<MainProps, MainState> {
    render() {
        return (<div>
          <h1>Main Component</h1>
          <SearchView />
        </div>);
    }
}
