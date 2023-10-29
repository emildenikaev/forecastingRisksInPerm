<template>
  <div class="relative">
    <iframe
      :src="src"
      :width="width || '100%'"
      :height="height || '500'"
      frameborder="0"
      allowfullscreen
      class="iframe"
    ></iframe>
    <div v-if="!hideBottom" class="absolute bottom-0 w-full h-5 bg-white"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: "500",
    },
    width: {
      type: String,
      default: "100%",
    },
    hideBottom: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    const handleLoad = () => {
      const iframes = document.querySelectorAll(".iframe");
      iframes.forEach((iframe) => {
        const iframeContent = iframe.contentDocument;
        const elements = iframeContent.querySelectorAll(
          ".leaflet-container .leaflet-control-attribution"
        );
        const els = iframeContent.querySelectorAll(
          ".leaflet-control-attribution .leaflet-control"
        );

        elements.forEach((element) => {
          element.style.display = "none";
        });

        if (els.length > 0) {
          els.forEach((element) => {
            element.style.display = "none";
          });
        } else {
          setTimeout(() => {
            els.forEach((element) => {
              element.style.display = "none";
            });
          });
        }
      });
    };

    const iframes = document.querySelectorAll(".iframe");
    iframes.forEach((iframe) => {
      iframe.addEventListener("load", handleLoad);
    });
  },
};
</script>

<style></style>
