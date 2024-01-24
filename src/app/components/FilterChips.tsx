import "./FilterChips.scss";
import React from "react";

const filterGroups = [
	["Alkohol", "Bier"],
	["Cocktails", "Heiß"],
	["Softdrinks", "Sommerdrinks"],
	["Angebote"],
  ];
  
  const getActiveGroup = (selectedFilters: string[]) => {
	for (const group of filterGroups) {
	  if (group.some((filter) => selectedFilters.includes(filter))) {
		return group;
	  }
	}
	return [];
  };
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
  
	const activeGroup = getActiveGroup(selectedFilters);
  
	const sortedFilters = [...activeGroup, ...filterGroups.flat().filter((filter) => !activeGroup.includes(filter))];
  
	return (
	  <div className="scrollHint">
		<div className="filterChips">
		  {sortedFilters.map((filter, index) => {
			const selected = selectedFilters.includes(filter);
			const disabled = activeGroup.length > 0 && !activeGroup.includes(filter);
			return (
			  <div key={index} onClick={!disabled ? () => handleChipClick(filter) : undefined}>
				<div className={selected ? "chip selected" : disabled ? "chip disabled" : "chip"}>
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