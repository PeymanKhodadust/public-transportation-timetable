import * as React from "react";

export interface ConnectionCoordinatesState {from: string,  to: string};

export class ConnectionCoordinates extends React.Component<any, ConnectionCoordinatesState> {
    constructor(props: any) {
        super(props);
        this.state = {from: "", to: ""};
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="from">Von:</label>
                    <input type="text" className="form-control" value={this.state.from} onChange={event => this.handleOnChangeFrom(event)} id="from" />
                </div>
                <div className="form-group">
                    <label htmlFor="to">Nach:</label>
                    <input type="text" className="form-control" value={this.state.to} onChange={event => this.handleOnChangeTo(event)} id="to" />
                </div>
            </div>
        );
    }
}