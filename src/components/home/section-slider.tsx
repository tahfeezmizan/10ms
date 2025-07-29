"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OffersSection } from "@/typss/common";

export default function SectionSlider({ data }: { data: OffersSection[] }) {
  const filteredData = data.filter(
    (item) => item?.name && item.name.trim() !== ""
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < filteredData.length - itemsToShow;

  const goPrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goNext = () => {
    if (canGoNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between gap-3 ">
        <Button
          onClick={goPrev}
          disabled={!canGoPrev}
          variant="ghost"
          size="icon"
          className={`rounded-full shadow ${
            canGoPrev
              ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
              : "bg-gray-200 text-white cursor-not-allowed"
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div
          className="flex"
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <div
            className="flex border-b transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}px)`,
              width: `${filteredData.length * (240 / itemsToShow)}px`,
            }}
          >
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-center font-medium text-gray-800"
                style={{
                  width: `calc(70% / ${itemsToShow})`,
                  padding: "0.5rem 0.75rem",
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={goNext}
          disabled={!canGoNext}
          variant="ghost"
          size="icon"
          className={`rounded-full shadow ${
            canGoNext
              ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
