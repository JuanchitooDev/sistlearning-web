<!-- <template>
  <div id="app">
    <Mantenimiento v-if="enMantenimiento" :mensaje="mensaje" />
    <div v-else>
      <div class="flex">
        <main class="flex-1 p-6">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Mantenimiento from "@/components/Mantenimiento.vue"; // Importa el componente

export default {
  components: {
    Mantenimiento,
  },
  setup() {
    // Variable reactiva para saber si está en mantenimiento
    const enMantenimiento = ref(true); // Cambia a `true` para mostrar mantenimiento, `false` para mostrar contenido normal.

    // Objeto con el mensaje que se mostrará
    const mensaje = ref({
      titulo: "Página en Mantenimiento",
      descripcion: "Estamos realizando mejoras, por favor regresa más tarde.",
    });

    // Simulamos un cambio de estado (puedes usar una API o alguna condición)
    setTimeout(() => {
      // Cambiar el mensaje después de 5 segundos como ejemplo
      mensaje.value = {
        titulo: "Página en Construcción",
        descripcion:
          "Estamos trabajando en una nueva versión, pronto estará disponible.",
      };
    }, 5000);

    return {
      enMantenimiento,
      mensaje,
    };
  },
};
</script>

<style>
</style> -->

<template>
  <div id="app">
    <div class="flex">
      <main class="flex-1 p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>

</script>