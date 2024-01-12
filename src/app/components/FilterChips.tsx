import "./FilterChips.scss";
import React from "react";

const FilterChips: React.FC = () => {
	return (
		<div className="filterChips">
			{filters.map((filter, index) => (
				<div key={index} className="chip">
					{filter}
				</div>
			))}
		</div>
	);
};

export default FilterChips;
