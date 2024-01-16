import './listItemLabels.scss'
import React from "react";

interface ListItemLabelProps {
    labelString: string;
}

const ListItemLabels: React.FC<ListItemLabelProps> = ({ labelString }: ListItemLabelProps) => {
    
    const labels = labelString.split(",")
        .map((label) => {
            return <span key={label.trim()}>{label.trim()}</span>
        })

    return <div className="listItemLabels">{labels}</div>
}

export default ListItemLabels