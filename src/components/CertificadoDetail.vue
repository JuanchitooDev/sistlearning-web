<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <img src="../assets/logo.png" alt="Logo" class="w-32 mb-4 mx-auto" />
    <h2 class="text-2xl font-bold text-center mb-4">
      Detalle del Certificado: {{ certificado?.codigo }}
    </h2>

    <div v-if="loading">
      <p class="text-gray-500">Cargando certificado...</p>
    </div>

    <div v-if="certificado">
      <p class="mb-2">
        <strong>Nombre del Alumno:</strong> {{ certificado.Alumno?.nombres }}
        {{ certificado.Alumno?.apellido_paterno }}
        {{ certificado.Alumno?.apellido_materno }}
      </p>
      <p class="mb-2">
        <strong>Evento:</strong> {{ certificado.Evento?.titulo }}
      </p>
      <p class="mb-2">
        <strong>Fecha de Registro:</strong>
        {{ formatDate(certificado.fecha_registro) }}
      </p>

      <div class="flex items-center mb-2">
        <strong>Estado:</strong>
        <svg
          v-if="certificado.estado"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-green-500 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-red-500 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <p class="mb-2">
        <strong>Código de validación:</strong> {{ certificado.codigo }}
      </p>

      <button
        @click="downloadCertificado(certificado.id)"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Descargar Certificado
      </button>
    </div>

    <div v-else>
      <p class="text-gray-500">No se encontró el certificado</p>
    </div>
  </div>
</template>
  
<script>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useCertificadoStore } from "@/stores/certificadoStore";

export default {
  setup() {
    const route = useRoute();
    const codigo = route.params.codigo;
    console.log('codigo', codigo)
    const certificadoStore = useCertificadoStore();

    const loading = ref(true);

    const fetchCertificado = async () => {
      loading.value = true;
      await certificadoStore.getCertificadoByCodigo(codigo);
      loading.value = false;
    };

    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString(); // Formato de fecha
    };

    onMounted(() => {
      fetchCertificado();
    });

    return {
      certificado: computed(() => certificadoStore.certificado),
      loading,
      formatDate,
      downloadCertificado: certificadoStore.downloadCertificado
    };
  },
};
</script>
  
<style scoped>
</style>
  