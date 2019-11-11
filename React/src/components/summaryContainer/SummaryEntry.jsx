import React, { Component } from "react";
import numeral from "numeral";
import { NUMERAL_FORMAT } from "../../constants";

export class SummaryEntry extends Component {
    render() {
        const { currency, amount } = this.props;
        if (!amount)
            return null;

        return (
            <tr>
                <td>{currency}</td>
                <td>{numeral(amount).format(NUMERAL_FORMAT)}</td>
            </tr>
        );
    }
}
