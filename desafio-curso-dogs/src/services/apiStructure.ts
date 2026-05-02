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

const PHOTO_GET = (id: string) => {
  return {
    url: apiUrl + `/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

const PHOTO_DELETE = (id: any) => {
  return {
    url: apiUrl + `/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    },
  };
};

const PASSWORD_POST = (body: object) => {
  return {
    url: apiUrl + "/api/password/lost",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

const PASSWORD_RESET = (body: object) => {
  return {
    url: apiUrl + "/api/password/reset",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: JSON.stringify(body),
    },
  };
};

const GET_STATS = (token: string) => {
  return {
    url: apiUrl + "/api/stats",
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export {
  PHOTO_POST,
  PHOTOS_GET,
  PHOTO_GET,
  COMMENT_POST,
  PHOTO_DELETE,
  PASSWORD_POST,
  PASSWORD_RESET,
  GET_STATS,
};
