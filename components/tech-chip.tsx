"use client";

import React from "react";
import Image from "next/image";
import { TECH_MAP } from "@/constants/tech";

interface TechChipProps {
  techId: string;
  className?: string;
}

export function TechChip({ techId, className = "" }: TechChipProps) {
  const tech = TECH_MAP[techId];

  if (!tech) {
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800 ${className}`}
      >
        {techId}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
        tech.svg ? "gap-1.5" : ""
      } ${className}`}
      style={{
        backgroundColor: `${tech.color}20`,
        color: tech.color,
        border: `1px solid ${tech.color}40`,
      }}
    >
      {tech.svg && <Image src={tech.svg} width={12} height={12} alt="" />}
      {tech.name}
    </span>
  );
}
