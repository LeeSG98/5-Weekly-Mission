// import { axiosIntance, useAsync } from "@/src/sharing/util";
// import { useCallback } from "react";

// export const useCheckEmailDuplicate = (email: string) => {
//   const checkEmailDuplicate = useCallback(
//     () =>
//       axiosInstance.post<{ data: { isUsableNickname: boolean } }>("check-email", {
//         email,
//       }),
//     [email]
//   );
//   const { execute, loading, error, data } = useAsync(checkEmailDuplicate, true);

//   return {
//     execute,
//     loading,
//     error,
//     data,
//   };
// };
import { useAsync } from "@/src/sharing/util";
import { useCallback } from "react";
import { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const baseURL = "https://bootcamp-api.codeit.kr/api/";

export const useCheckEmailDuplicate = (email: string) => {
  const checkEmailDuplicate = useCallback(async (): Promise<
    AxiosResponse<{ isUsableNickname: boolean }>
  > => {
    try {
      const response = await fetch(`${baseURL}check-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // AxiosResponse 형식에 맞게 변환
      const axiosResponse: AxiosResponse<{ isUsableNickname: boolean }> = {
        data: {
          isUsableNickname: result.data.isUsableNickname,
        },
        status: response.status,
        statusText: response.statusText,
        headers: {}, // Fetch API에서 헤더를 직접 얻을 수 있지만, 필요에 따라 추가 가능
        config: {} as InternalAxiosRequestConfig, // 빈 객체로 설정, 필요에 따라 채울 수 있음
        request: {}, // request 객체, 필요에 따라 추가 가능
      };

      return axiosResponse;
    } catch (error) {
      console.error("Error checking email duplicate:", error);
      throw error;
    }
  }, [email]);

  const { execute, loading, error, data } = useAsync(checkEmailDuplicate, true);

  return {
    execute,
    loading,
    error,
    data,
  };
};
