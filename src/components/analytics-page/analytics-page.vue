<template>
  <div>
    <section class="section-first">
      <h1>Подробный анализ по ЧС</h1>
      <div class="analys">
        <div class="map">
          <BaseIframe :src="'/data/map/2.html'" width="500px" height="600px" />
        </div>
        <div>
          <div class="date-picker">
            <span class="date-picker-title">Отчетная дата: </span>

            <a-date-picker
              v-model:value="selectedDate"
              placeholder="Выберите дату"
              format="DD.MM.YYYY"
              class="choise"
            />
          </div>
          <div class="select">
            <span class="select-title">Район: </span>
            <a-select
              v-model:value="selectedOption"
              :options="options"
              :placeholder="''"
              class="choise"
            ></a-select>
          </div>
          <div class="btn-data">
            <a-button @click="requestGraph" class="btn-dt"
              >Получить данные</a-button
            >
          </div>

          <h4>Сводка за 7 дней:</h4>
          <ul class="zebra">
            <li
              v-for="(value, key, index) in INFO"
              :key="index"
              v-show="value !== 0"
            >
              <span>{{ key }}: {{ value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div>
      <h1>Уровень риска</h1>
      <ul class="risk">
        <li v-for="(value, key, index) in COLORS" :key="index" class="list-el">
          <span :class="getColorClass(value)" class="risk-c"></span>
          <span>
            {{ key }}:
            {{
              value === 0
                ? "Низкий риск"
                : value === 1
                ? "Средний риск"
                : value === 2
                ? "Высокий риск"
                : ""
            }}
          </span>
        </li>
      </ul>
    </div>
    <section>
      <h1>Прогноз происшествий на 10 дней</h1>
      <a-table :dataSource="GRAPH.dataSource" :columns="GRAPH.columns" />
    </section>

    <section>
      <h1>Прогноз погоды</h1>
      <apexchart
        v-if="this.PREDICT"
        type="bar"
        :options="this.PREDICT.data.chart_options"
        :series="this.PREDICT.data.series"
        class="chart"
      ></apexchart>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BaseIframe from "../base/BaseIframe.vue";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { notification } from "ant-design-vue";

export default defineComponent({
  name: "analytics-page",
  components: {
    BaseIframe,
  },
  data() {
    return {
      selectedOption: "",
      selectedDate: "",
      pickerValue: "01.01.2018",
      info: "",

      options: [
        { label: "Александровский МО", value: "Александровский МО" },
        { label: "Бардымский МО", value: "Бардымский МО" },
        { label: "Березники ГО", value: "Березники ГО" },
        { label: "Березовский МО", value: "Березовский МО" },
        { label: "Большесосновский МО", value: "Большесосновский МО" },
        { label: "Верещагинский ГО", value: "Верещагинский ГО" },
        { label: "Гайнский МО", value: "Гайнский МО" },
        { label: "Горнозаводский ГО", value: "Горнозаводский ГО" },
        { label: "Губахинский МО", value: "Губахинский МО" },
        { label: "Добрянский ГО", value: "Добрянский ГО" },
        { label: "Еловский МО", value: "Еловский МО" },
        { label: "ЗАТО Звездный", value: "ЗАТО Звездный" },
        { label: "Ильинский ГО", value: "Ильинский ГО" },
        { label: "Кишертский МО", value: "Кишертский МО" },
        { label: "Косинский МО", value: "Косинский МО" },
        { label: "Кочевский МО", value: "Кочевский МО" },
        { label: "Краснокамский ГО", value: "Краснокамский ГО" },
        { label: "Красновишерский ГО", value: "Красновишерский ГО" },
        { label: "Кудымкарский МО", value: "Кудымкарский МО" },
        { label: "Куединский МО", value: "Куединский МО" },
        { label: "Кунгурский МО", value: "Кунгурский МО" },
        { label: "Кыштовский ГО", value: "Кыштовский ГО" },
        { label: "Лысьвенский ГО", value: "Лысьвенский ГО" },
        { label: "Нытвенский ГО", value: "Нытвенский ГО" },
        { label: "Октябрьский ГО", value: "Октябрьский ГО" },
        { label: "Осинский ГО", value: "Осинский ГО" },
        { label: "Оханский ГО", value: "Оханский ГО" },
        { label: "Очерский ГО", value: "Очерский ГО" },
        { label: "Пермский ГО", value: "Пермский ГО" },
        { label: "Пермский МО", value: "Пермский МО" },
        { label: "Сивинский МО", value: "Сивинский МО" },
        { label: "Соликамский ГО", value: "Соликамский ГО" },
        { label: "Суксунский ГО", value: "Суксунский ГО" },
        { label: "Уинский МО", value: "Уинский МО" },
        { label: "Чарышский ГО", value: "Чарышский ГО" },
        { label: "Частинский МО", value: "Частинский МО" },
        { label: "Чердынский ГО", value: "Чердынский ГО" },
        { label: "Чернушинский ГО", value: "Чернушинский ГО" },
        { label: "Чусовской ГО", value: "Чусовской ГО" },
        { label: "Юрлинский МО", value: "Юрлинский МО" },
        { label: "Юсьвинский МО", value: "Юсьвинский МО" },
      ],
    };
  },
  methods: {
    ...mapActions(["GET_PREDICT_FROM_API"]),
    ...mapActions(["GET_INFO_FROM_API"]),
    ...mapActions(["GET_GRAPH_FROM_API"]),
    ...mapActions(["GET_COLORS_FROM_API"]),

    getColorClass(value) {
      if (value === 0) {
        return "low-risk";
      } else if (value === 1) {
        return "medium-risk";
      } else if (value === 2) {
        return "high-risk";
      } else {
        return "";
      }
    },

    requestGraph() {
      if (this.selectedOption && this.selectedDate) {
        const date = moment(this.selectedDate.$d).format("YYYY-MM-DD");
        const name = this.selectedOption;
        this.GET_PREDICT_FROM_API({ date, name });
        this.GET_INFO_FROM_API({ date });
        this.GET_GRAPH_FROM_API({ date, name });
        this.GET_COLORS_FROM_API({ date, name });
      } else {
        notification.error({
          message: "Необходимо заполнить все поля",
          style: {
            width: 300,
            marginRight: "600px",
          },
        });
      }
    },
  },

  computed: {
    ...mapGetters(["GRAPH"]),
    ...mapGetters(["PREDICT"]),
    ...mapGetters(["INFO"]),
    ...mapGetters(["COLORS"]),
  },
});
</script>

<style lang="scss" scoped>
.analys {
  display: flex;
  margin-bottom: 40px;
}

ul {
  list-style-type: none;
}
.risk-c {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
}

.list-el {
  display: flex;
  align-items: center;
}

.low-risk {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
}

.medium-risk {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: yellow;
}

.high-risk {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
}

.risk {
  text-align: left;
  margin-left: -20px;

  li {
    font-size: 24px;
    margin-bottom: 8px;
    margin-left: 5px;
  }
}

.btns-wrap {
  display: flex;
  justify-content: left;
  margin-bottom: 40px;

  .btn {
    margin-right: 40px;
  }
}

h4 {
  text-align: left;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 1px;
}
.zebra {
  list-style: none;
  border-left: 10px solid #02458d;
  padding: 0;
}
.zebra li {
  padding: 10px;
  text-align: left;
  border-top: 1px solid #02458d;
}
.zebra li:last-child(even) {
  border-bottom: none;
}

.btn-data {
  display: flex;
  justify-content: right;
}

section {
  margin: 80px 0;
}

h1 {
  font-size: 35px;
  text-align: left;
  margin-bottom: 20px;
}

section.section-first {
  margin-top: 20px;
}
.map {
  margin-right: 50px;
}

.date-picker,
.select {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;

  &-title {
    font-size: 24px;
    margin-right: 20px;
    width: 180px;
    text-align: left;
  }

  .choise {
    width: 200px;
    text-align: left;
  }
}

.btn-dt {
  width: 200px;
}
</style>
