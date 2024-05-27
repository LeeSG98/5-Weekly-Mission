import { FolderRawData } from "@/src/folder/type";
import { mapFoldersData } from "@/src/folder/MapData/mapFoldersData";
import { axiosInstance } from "@/src/sharing/util";
import { useAsync } from "@/src/sharing/util";

export const useGetFolders = () => {
  const getFolders = () =>
    axiosInstance.get<{ data: FolderRawData[] }>("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const folders = mapFoldersData(data?.data);
  const sortedFolders = folders.sort((a, b) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};

// import { useEffect, useState } from "react";
// import { FolderRawData } from "@/src/folder/type";
// import { mapFoldersData } from "@/src/folder/MapData/mapFoldersData";

// const baseURL = "https://bootcamp-api.codeit.kr/api/";

// export const useGetFolders = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<Error | null>(null); // 타입 명시
//   const [data, setData] = useState<FolderRawData[] | undefined>(undefined); // 초기값을 undefined로 설정

//   useEffect(() => {
//     const fetchFolders = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(`${baseURL}users/1/folders`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         setData(result.data);
//       } catch (error) {
//         setError(error as Error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFolders();
//   }, []);

//   const folders = mapFoldersData(data);
//   const sortedFolders = folders.sort((a, b) => (a?.id || 0) - (b?.id || 0));

//   return { loading, error, data: sortedFolders };
// };
