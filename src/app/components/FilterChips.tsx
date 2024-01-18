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
			setSelectedFilters(selectedFilters.filter((f) => f !== filter));
		} else {
			setSelectedFilters([...selectedFilters, filter]);
		}
	};

	const unselect = (filter: string) => () => {
		setSelectedFilters(selectedFilters.filter((f) => f !== filter));
	};

	return (
		<div className="scrollHint">
			<div className="filterChips">
				{mockFilters.map((filter, index) => {
					const selected = selectedFilters.includes(filter);
					return (
						<div key={index} onClick={() => handleChipClick(filter)}>
							<div className={selected ? "chip selected" : "chip"}>
								{filter}
								<span className={`closeIcon ${!selected ? 'hide' : ''}`} onClick={unselect(filter)} >X</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FilterChips;
