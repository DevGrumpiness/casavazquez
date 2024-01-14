import "./FilterChips.scss";
import React from "react";

const mockFilters = ["Alkoholisch", "Bier", "Cocktails", "Heiß", "Softdrinks", "Sommerdrinks", "Angebote"];

interface FilterChipsProps {
	selectedFilters: string[];
	setSelectedFilters: (filters: string[]) => void;
}

const FilterChips: React.FC<FilterChipsProps> = ({ selectedFilters, setSelectedFilters }) => {
	const handleChipClick = (filter: string) => {
		if (selectedFilters.includes(filter)) {
			setSelectedFilters(selectedFilters.filter(f => f !== filter));
		} else {
			setSelectedFilters([...selectedFilters, filter]);
		}
	};

	return (
		<div className="scrollHint">
			<div className="filterChips">
				{mockFilters.map((filter, index) => (
					<div key={index}
						className={selectedFilters.includes(filter) ? "chip selected" : "chip"}
						onClick={() => handleChipClick(filter as string)}
					>
						{filter}
					</div>
				))}
			</div>
		</div>
	);
};

export default FilterChips;