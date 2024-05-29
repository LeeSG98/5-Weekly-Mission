import axios from "axios";

const BASIC_URL = "https://bootcamp-api.codeit.kr/api";

const getAuthHeaders = () => ({
  headers: {
    Authorization: localStorage.accessToken,
  },
});

const handleResponse = (response: any) => response.data.data;

export async function getUser() {
  if (!localStorage.accessToken) return;

  const response = await axios.get(`${BASIC_URL}/users`, getAuthHeaders());
  return handleResponse(response)[0];
}

export async function getFolderUser(id: number) {
  const response = await axios.get(`${BASIC_URL}/users/${id}`);
  return handleResponse(response)[0];
}

export async function postCheckDuplicateEmail(email: string) {
  const response = await axios.post(`${BASIC_URL}/check-email`, { email });
  return response.data;
}

export async function postSignUp(email: string, password: string) {
  const response = await axios.post(`${BASIC_URL}/sign-up`, {
    email,
    password,
  });
  return response.data;
}

export async function postSignIn(email: string, password: string) {
  const response = await axios.post(`${BASIC_URL}/sign-in`, {
    email,
    password,
  });
  return handleResponse(response);
}

export async function getFolders(folderId: number, userId?: number | null) {
  const folderPath = folderId === 0 ? "" : `/${folderId}`;
  const userPath = userId ? `/users/${userId}` : "";
  const response = await axios.get(
    `${BASIC_URL}${userPath}/folders${folderPath}`
  );
  return handleResponse(response);
}

export async function getLinks(userId: number | null, folderId: number) {
  const queryParam = folderId === 0 ? "" : `?folderId=${folderId}`;
  const response = await axios.get(
    `${BASIC_URL}/users/${userId}/links${queryParam}`
  );
  return handleResponse(response);
}
