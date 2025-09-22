import React, { useState } from "react";
import Pill from "../common/Pill";
import { FILTERS } from "@/constants";

const FilterSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>("");

    return (
        <div className="flex flex-wrap gap-3 p-4">
            {FILTERS.map((filter) => (
                <Pill 
                    key={filter}
                    label="filter"
                    active={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                />
            ))}
        </div>
    );
};

export default FilterSection;