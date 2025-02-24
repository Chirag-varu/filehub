import React from "react";
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonForPage = () => {
    return (
        <div className="animate-pulse space-y-4">
            {/* Skeleton for title */}
            <Skeleton  className="h-6 w-32 bg-gray-700 rounded-md" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                {/* Skeleton for total size section */}
                <Skeleton className="h-4 w-48 bg-gray-600 rounded-md ml-16" />

                {/* Skeleton for sorting section */}
                <div className="flex items-center space-x-3 hidden md:block">
                    <Skeleton className="h-3 w-28 bg-gray-600 rounded-md right-4" />
                    <Skeleton className="h-4 w-48 bg-gray-600 rounded-md" />
                </div>
                <Skeleton className="h-4 w-full sm:w-48 bg-gray-600 rounded-md block md:hidden" />
            </div>

            {/* Skeleton for file list */}
            <div className="mt-6 space-y-3">
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-14 w-full bg-gray-700 rounded-md" />
                ))}
            </div>
        </div>
    );
};

export default SkeletonForPage;
