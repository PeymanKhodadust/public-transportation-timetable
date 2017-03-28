import * as React from "react";

export interface SearchViewProps {connectionCoordinates: any, onChangeFrom: any, onChangeTo: any}
export interface SearchViewState {}

export class SearchView extends React.Component<SearchViewProps, SearchViewState> {
    constructor(props: SearchViewProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <this.props.connectionCoordinates onChangeFrom={this.props.onChangeFrom} onChangeTo={this.props.onChangeTo}/>
            </div>
        );
    }
}
