<template>
  <div>
    <h1>Мониторинг ЧС Пермского края</h1>
    <div class="analys">
      <div class="map">
        <BaseIframe :src="'/data/map/1.html'" width="500px" height="600px" />
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
        <div class="btn-data">
          <a-button @click="requestGraph" class="btn-dt"
            >Получить данные</a-button
          >
        </div>
        <h4>Сводка за 7 дней:</h4>
        <ul class="zebra">
          <li
            v-for="(value, key, index) in ALLINFO"
            :key="index"
            v-show="value !== 0"
          >
            <span>{{ key }}: {{ value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BaseIframe from "../base/BaseIframe.vue";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { notification } from "ant-design-vue";

export default defineComponent({
  name: "monitoring-page",
  components: {
    BaseIframe,
  },

  data() {
    return {
      selectedDate: "",
    };
  },

  methods: {
    ...mapActions(["GET_ALLINFO_FROM_API"]),

    requestGraph() {
      if (this.selectedDate) {
        const date = moment(this.selectedDate.$d).format("YYYY-MM-DD");
        this.GET_ALLINFO_FROM_API({ date });
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
    ...mapGetters(["ALLINFO"]),
  },
});
</script>

<style lang="scss" scoped>
.analys {
  display: flex;
  margin-bottom: 40px;
}

h4 {
  text-align: left;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 1px;
}

.btn-data {
  display: flex;
  justify-content: right;
}

.btn-dt {
  width: 200px;
}

h1 {
  font-size: 35px;
  text-align: left;
  margin-bottom: 20px;
}

.btns-wrap {
  display: flex;
  justify-content: left;
  margin-bottom: 40px;

  .btn {
    margin-right: 40px;
  }
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
.map {
  margin-right: 50px;
}

.date-picker {
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
    min-width: 200px;
    text-align: left;
  }
}
</style>
