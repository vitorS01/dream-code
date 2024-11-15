import { ref } from "vue";
import axios, { AxiosError } from "axios";
import { ProblemTemplate } from "../types";

export function useGenerateModel() {
  const formData = ref({
    context: "",
    topics: "",
    level: "Easy",
    language: "Portuguese",
  });

  const loading = ref(false);
  const error = ref<AxiosError | null>(null);
  const result = ref<ProblemTemplate | null>(null);

  const submitForm = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.post(
        "https://dreamcode-api.adaptable.app/problem",
        {
          language: formData.value.language,
          context: formData.value.context,
          topics: formData.value.topics.split(","),
          level: formData.value.level,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      result.value = response.data.body.data;
    } catch (err: any) {
      error.value = err.response?.data?.message || "An error occured.";
    } finally {
      loading.value = false;
    }
  };

  return {
    formData,
    loading,
    error,
    result,
    submitForm,
  };
}
