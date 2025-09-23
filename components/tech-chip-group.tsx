"use client";

import React from "react";
import { TechChip } from "./tech-chip";

interface TechChipGroupProps {
  techIds: string[];
  className?: string;
}

export function TechChipGroup({ techIds, className = "" }: TechChipGroupProps) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {techIds.map((techId) => (
        <TechChip key={techId} techId={techId} />
      ))}
    </div>
  );
}
