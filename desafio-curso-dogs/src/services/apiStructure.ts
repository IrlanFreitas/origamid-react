export const apiUrl = import.meta.env.VITE_API_URL;

const PHOTO_POST = (token: string, formData: FormData) => {
  return {
    url: apiUrl + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
};

const PHOTOS_GET = (page: number, total: number, user?: string) => {
  return {
    url:
      apiUrl +
      `/api/photo/?_page=${page}&_total=${total}${user !== undefined ? `&_user=${user}` : ""} `,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

const PHOTO_GET = (id: number) => {
  return {
    url: apiUrl + `/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

const COMMENT_POST = (id: any, body: { comment: string }) => {
  return {
    url: apiUrl + `/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
      body: JSON.stringify(body),
    },
  };
};

export { PHOTO_POST, PHOTOS_GET, PHOTO_GET, COMMENT_POST };
