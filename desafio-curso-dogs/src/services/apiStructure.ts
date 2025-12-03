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

const PHOTOS_GET = (page: number, total: number, user: string) => {
  return {
    url: apiUrl + `/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: 'no-store'
    },
  };
};

export { PHOTO_POST, PHOTOS_GET};
