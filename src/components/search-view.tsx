import * as React from "react";

export interface SearchViewProps {}

export interface SearchViewState {}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class SearchView extends React.Component<SearchViewProps, SearchViewState> {
    render() {
        return <h1>Search View</h1>;
    }
}
