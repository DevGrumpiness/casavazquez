import "./FilterChips.scss";
import React from "react";

const mockFilters = ["Alkoholisch", "Bier", "Cocktails", "Heiß", "Softdrinks", "Sommerdrinks", "Angebote"];

const FilterChips: React.FC = () => {
	return (
		<div className="scrollHint">
			<div className="filterChips">
				{mockFilters.map((filter, index) => (
					<div key={index} className="chip">
						{filter}
					</div>
				))}
			</div>
		</div>
	);
};

export default FilterChips;
