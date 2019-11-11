import React, { Component } from "react";
import { DataContainer } from "../dataContainer/DataContainer";
import { SummaryContainer } from "../summaryContainer/SummaryContainer";

let setDataState = () => { };
window.SendData = data => setDataState(data);

export class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selected: []
        };
    }

    componentDidMount() {
        setDataState = this._setData.bind(this);
    }

    _setData(data) {
        this.setState({ data });
    }

    _selectEntry(entry) {
        const { selected } = this.state;
        this.setState({
            selected: selected.includes(entry)
                ? selected.filter(e => e !== entry)
                : [...selected, entry]
        });
    }

    render() {
        const { data, selected } = this.state;
        return (
            <>
                <DataContainer data={data} toggleSelection={this._selectEntry.bind(this)}></DataContainer>
                <SummaryContainer selected={selected}></SummaryContainer>
            </>
        );
    }
}
