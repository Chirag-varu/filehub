"use client"; 

import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Sort from "@/Components/Sort";
import { getFiles } from "@/lib/actions/file.actions";
import { Models } from "node-appwrite";
import Card from "@/Components/Card";
import { getFileTypesParams } from "@/lib/utils";
import SkeletonForPage from "@/Components/SkeletonForPage";

type FileType = "audio" | "video" | "image" | "other" | "document";

const Page = () => {
  const params = useParams(); 
  const searchParams = useSearchParams(); 

  const [files, setFiles] = useState<{ documents: Models.Document[]; total: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      const type = (params?.type as string) || "";
      const searchText = searchParams.get("query") || "";
      const sort = searchParams.get("sort") || "";
      const types = (await getFileTypesParams(type)) as FileType[];

      const fetchedFiles = await getFiles({ types, searchText, sort });
      setFiles(fetchedFiles);
      setLoading(false);
    };

    fetchFiles();
  }, [searchParams, params]);

  return (
    <>
      {loading ? <SkeletonForPage /> :
        <div className="page-container">
          <section className="w-full">
            <h1 className="h1 capitalize">{params?.type || "Files"}</h1>

            <div className="total-size-section">
              <p className="body-1">
                Total: <span className="h5">0 MB</span>
              </p>

              <div className="sort-container">
                <p className="body-1 hidden text-light-200 sm:block">Sort by:</p>
                <Sort />
              </div>
            </div>
          </section>

          {files && files.total > 0 ? (
            <section className="file-list">
              {files.documents.map((file) => (
                <Card key={file.$id} file={file} />
              ))}
            </section>
          ) : (
            <p className="empty-list">No files uploaded</p>
          )}
        </div>}
    </>
  );
};

export default Page;
