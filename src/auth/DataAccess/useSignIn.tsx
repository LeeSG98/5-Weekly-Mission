// import { axiosInstance, useAsync } from "@/src/sharing/util";
// import { useCallback, useEffect } from "react";
// import { Token } from "../type";

// type UseSignInParams = { email: string; password: string };

// export const useSignIn = ({ email, password }: UseSignInParams) => {
//   const signIn = useCallback(
//     () =>
//       axiosInstance.post<{ data: Token }>("sign-in", {
//         email,
//         password,
//       }),
//     [email, password]
//   );
//   const { execute, loading, error, data } = useAsync(signIn, true);

//   useEffect(() => {
//     if (data?.data.accessToken) {
//       localStorage.setItem("accessToken", data.data.accessToken);
//     }
//   }, [data?.data.accessToken]);

//   return {
//     execute,
//     loading,
//     error,
//     data,
//   };
// };

import { useCallback, useEffect, useState } from "react";
import { Token } from "../type";

const baseURL = "https://bootcamp-api.codeit.kr/api/";

type UseSignInParams = { email: string; password: string };

export const useSignIn = ({ email, password }: UseSignInParams) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null); // 타입 명시
  const [data, setData] = useState<Token | null>(null); // Token 타입으로 명시

  const signIn = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${baseURL}sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error as Error); // 에러의 타입을 명시적으로 설정
    } finally {
      setLoading(false);
    }
  }, [email, password]);

  useEffect(() => {
    if (data?.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
    }
  }, [data?.accessToken]);

  return {
    execute: signIn,
    loading,
    error,
    data,
  };
};
