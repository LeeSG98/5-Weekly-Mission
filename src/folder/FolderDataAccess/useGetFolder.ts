import { SampleFolderRawData } from "@/src/folder/type";
import { mapFolderData } from "@/src/folder/MapData";
import { useAsync } from "@/src/sharing/util";
import { axiosInstance } from "@/src/sharing/util";

export const useGetFolder = () => {
  const getFolder = () =>
    axiosInstance.get<{ folder: SampleFolderRawData }>("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};

// import { useEffect, useState } from "react";
// import { SampleFolderRawData } from "@/src/folder/type";
// import { mapFolderData } from "@/src/folder/MapData";

// const baseURL = "https://bootcamp-api.codeit.kr/api/";

// export const useGetFolder = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<Error | null>(null);
//   const [data, setData] = useState<SampleFolderRawData | undefined>(undefined);

//   useEffect(() => {
//     const fetchFolder = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(`${baseURL}sample/folder`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         setData(result.folder);
//       } catch (error) {
//         setError(error as Error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFolder();
//   }, []);

//   const folderData = mapFolderData(data);

//   return { loading, error, data: folderData };
// };
