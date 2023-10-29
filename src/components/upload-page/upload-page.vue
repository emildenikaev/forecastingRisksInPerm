<template>
  <div>
    <h1>Загрузка файла в формате .csv</h1>
    <div class="selection">
      <a-date-picker
        v-model:value="selectedDate"
        :placeholder="'Выберите дату'"
        format="DD.MM.YYYY"
        class="choise"
      />
      <a-select
        v-model:value="selectedOption"
        :options="options"
        placeholder="Выберите тип файла"
        class="choise"
      ></a-select>
      <a-upload
        action="http://45.86.180.208:8000/uploadfile/"
        :before-upload="beforeUpload"
        :on-success="onSuccess"
        :on-error="onError"
        class="choise-upload"
      >
        <a-button
          class="choise-upload"
          :disabled="!selectedOption || !selectedDate"
        >
          <a-upload-outlined class="choise" /> Загрузить файл
        </a-button>
      </a-upload>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: "",
      selectedOption: "Network deterioration.csv",
      options: [
        { label: "Meteo data.csv", value: "Meteo data.csv" },
        { label: "DTP.csv", value: "DTP.csv" },
        {
          label: "Network deterioration.csv",
          value: "Network deterioration.csv",
        },
        { label: "Natural incidents.csv", value: "Natural incidents.csv" },
        { label: "Fires.csv", value: "Fires.csv" },
        { label: "Incidents.csv", value: "Incidents.csv" },
        {
          label: "Temperature statistics.csv",
          value: "Temperature statistics.csv",
        },
      ],
    };
  },
  methods: {
    beforeUpload(file) {
      const isCsv = file.type === "text/csv" || file.name.endsWith(".csv");
      if (!isCsv) {
        this.$message.error("Можно загружать только csv файлы!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Размер файла должен быть меньше 2MB!");
      }
      return isCsv && isLt2M;
    },

    onSuccess() {
      this.$message.success("Файл успешно загружен!");
    },

    onError(error) {
      this.$message.error("Ошибка при загрузке файла!");
      console.log(error);
      // обработка ошибки при загрузке файла
    },
  },
};
</script>

<style lang="scss">
.selection {
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  margin: 0 auto;

  .choise {
    width: 400px;
    margin-bottom: 20px;
    text-align: left;

    &-upload {
      width: 400px;
    }
  }
}
</style>
