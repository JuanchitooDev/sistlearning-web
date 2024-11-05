<!-- src/components/Mantenimiento.vue -->
<template>
    <div class="flex justify-center items-center h-screen bg-gray-200">
      <div class="text-center bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
        <h2 class="text-3xl font-bold text-red-600 mb-4">{{ mensaje.titulo }}</h2>
        <p class="text-lg text-gray-700 mb-4">{{ mensaje.descripcion }}</p>
        <p class="text-sm text-gray-500">Por favor, intente más tarde.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Mantenimiento",
    props: {
      mensaje: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>
  