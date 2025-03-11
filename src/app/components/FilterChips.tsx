import "./FilterChips.scss";
import React, { useState } from "react";

interface FilterChipsProps {
	selectedFilters: string[];
	setSelectedFilters: (filters: string[]) => void;
	filters: Array<string>;
}

const FilterChips: React.FC<FilterChipsProps> = ({ selectedFilters, setSelectedFilters, filters }) => {
	const sortedFilters = [...filters].sort();
	
	let filtersToDisplay = selectedFilters.length > 0 ? selectedFilters : filters;

	const handleChipClick = (filter: string) => {
		setSelectedFilters([filter]);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const unselect = (filter: string) => (event: React.MouseEvent) => {
		event.stopPropagation();
		setSelectedFilters(selectedFilters.filter((f) => f !== filter));
	};

	return (
		<div className="scrollHint">
			<div className="filterChips">
				<div className="filterList">
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
		</div>
	);
};

export default FilterChips;
