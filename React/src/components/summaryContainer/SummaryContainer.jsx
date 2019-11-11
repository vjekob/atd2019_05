import React, { PureComponent } from "react";
import styles from "./SummaryContainer.module.css";
import { SummaryDetails } from "./SummaryDetails";
import { SummaryInfo } from "./SummaryInfo";

export class SummaryContainer extends PureComponent {
    render() {
        const { selected } = this.props;
        return (
            <div className={styles.summary}>
                <div className={styles.label}>Payment summary</div>
                {
                    selected.length
                        ? <SummaryDetails selected={selected} />
                        : <SummaryInfo />
                }
            </div>
        );
    }
}
