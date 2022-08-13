import { ref } from "vue";

export function useFetch(path) {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const host = import.meta.env.MODE === "development" ? "http://localhost:1337" : import.meta.env.VITE_STRAPI_URL;

  function fetchData() {
    const url = `${host}${path}`;
    loading.value = true;
    error.value = null;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        data.value = json;
        loading.value = false;
      })
      .catch(err => {
        error.value = err;
        loading.value = false;
      });
  }

  return {
    data,
    loading,
    error,
    fetchData
  };
}


