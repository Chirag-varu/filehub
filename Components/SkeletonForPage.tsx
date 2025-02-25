import React from "react";
import { Skeleton } from "@/Components/ui/skeleton";

const SkeletonForPage = () => {
    return (
        <div className="animate-pulse space-y-4 p-8">
            {/* Skeleton for title */}
            <Skeleton className="h-10 w-32 rounded-md bg-gray-700" aria-hidden="true" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                {/* Skeleton for total size section */}
                <Skeleton className="h-4 w-48 rounded-md bg-gray-600" aria-hidden="true" />

                {/* Skeleton for sorting section */}
                <div className="hidden md:flex items-center space-x-3">
                    <Skeleton className="h-3 w-28 rounded-md bg-gray-600" aria-hidden="true" />
                    <Skeleton className="h-4 w-48 rounded-md bg-gray-600" aria-hidden="true" />
                </div>
                <Skeleton className="h-4 w-full sm:w-48 rounded-md bg-gray-600 md:hidden" aria-hidden="true" />
            </div>

            {/* Skeleton for file list */}
            <div className="mt-6 flex flex-wrap gap-6">
                {Array(16).fill(null).map((_, i) => (
                    <Skeleton key={i} className="h-20 w-32 rounded-md bg-gray-700" aria-hidden="true" />
                ))}
            </div>
        </div>
    );
};

export default SkeletonForPage;
