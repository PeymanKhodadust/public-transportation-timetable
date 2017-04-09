import * as React from "react";
import * as MobxReact from "mobx-react";
import {ConnectionInputProps} from "./interfaces";
@MobxReact.observer
export class ConnectionInput extends React.Component<ConnectionInputProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {from: "", to: ""};
    }
    public handleChangeFrom (from: string) {
        this.props.connection[0] = from;
    }
    public handleChangeTo (to: string) {
        this.props.connection[1] = to;
    }

    render() {
        const connection = this.props.connection;
        //this.props.connection[0] += "changed";
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="from">Von:</label>
                    <input type="text" className="form-control" value={connection[0]} onChange={event => this.handleChangeFrom(event.target.value)} id="from" />
                </div>
                <div className="form-group">
                    <label htmlFor="to">Nach:</label>
                    <input type="text" className="form-control" value={connection[1]} onChange={event => this.handleChangeTo(event.target.value)} id="to" />
                </div>
            </div>
        );
    }
}