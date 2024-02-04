import "./FilterChips.scss";
import React from "react";

interface FilterChipsProps {
	selectedFilters: string[];
	setSelectedFilters: (filters: string[]) => void;
	filters: Array<string>;
}

const FilterChips: React.FC<FilterChipsProps> = ({ selectedFilters, setSelectedFilters, filters }) => {
	const sortedFilters = [...filters].sort();


	const filtersToDisplay = selectedFilters.length > 0 ? selectedFilters : sortedFilters;

	const handleChipClick = (filter: string) => {
		setSelectedFilters([filter]);
	};

	const unselect = (filter: string) => () => {
		setSelectedFilters(selectedFilters.filter((f) => f !== filter));
	};

	return (
		<div className="scrollHint">
			<div className="filterChips">
				{filtersToDisplay.map((filter, index) => {
					const selected = selectedFilters.includes(filter);
					return (
						<div key={index} onClick={() => handleChipClick(filter)}>
							<div className={selected ? "chip selected" : "chip"}>
								<span className="filterLabel">{filter}</span>
								<span className={`closeIcon ${!selected ? "hide" : ""}`} onClick={unselect(filter)}>
									X
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FilterChips;