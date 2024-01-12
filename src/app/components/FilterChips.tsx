import "./FilterChips.scss";
import React from "react";

const mockFilters = ["Alkoholisch", "Bier", "Cocktails", "Heiß"];

const FilterChips: React.FC = () => {
	return (
		<div className="filterChips">
			{mockFilters.map((filter, index) => (
				<div key={index} className="chip">
					{filter}
				</div>
			))}
		</div>
	);
};

export default FilterChips;
