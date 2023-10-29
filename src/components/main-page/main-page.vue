<template>
  <div>
    <section class="section-first">
      <h1 class="main-title">
        Прогнозирование опасностей и рисков Пермского края
      </h1>
      <ul class="cards">
        <li class="cards__item">
          <h4 class="card__title">Мониторинг ЧС Пермского края</h4>

          <div class="card">
            <div class="card__image card__image--record">
              <BaseIframe
                :src="'/data/map/1.html'"
                width="100%"
                height="400px"
              />
            </div>
            <div class="card__content">
              <p class="card__text">
                Составить прогноз опасностей и рисков возникновения происшествий
                в Пермском край.
              </p>

              <router-link :to="{ name: 'monitoringPage' }">
                <a-button class="btn btn--block card__btn">
                  Перейти к мониторингу
                </a-button>
              </router-link>
            </div>
          </div>
        </li>
        <li class="cards__item">
          <h4 class="card__title">Подробный анализ по ЧС</h4>
          <div class="card">
            <div class="card__image card__image--flowers">
              <BaseIframe :src="'/data/map/2.html'" height="400px" />
            </div>
            <div class="card__content">
              <p class="card__text">
                Анализировать данные МЧС России и гидрометцентра, составить
                прогноз опасностей и рисков возникновения происшествий в
                отдельном райне
              </p>
              <router-link :to="{ name: 'analyticsPage' }">
                <a-button class="btn btn--block card__btn"
                  >Выбрать район</a-button
                >
              </router-link>
            </div>
          </div>
        </li>
        <li class="cards__item">
          <h4 class="card__title">Загрузить новые данные</h4>
          <div class="card">
            <div class="card__image card__image--flowers upload">
              <img src="../../assets/img/server.jpg" />
            </div>
            <div class="card__content">
              <p class="card__text">
                Передать информацию на сервер для дальнейшей обработки моделью,
                сохранения результатов в базу
              </p>
              <router-link :to="{ name: 'uploadPage' }">
                <a-button class="btn btn--block card__btn"
                  >Загрузить новые данные</a-button
                >
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <div class="parallelogram">
        <div class="parallelogram-text">
          <p>
            Команда "Зумеры и Бумеры" провела всесторонний исследовательский
            проект, направленный на анализ опасностей и рисков в Пермском крае.
            Модель основана на алгоритме градиентного бустинга catboost, для
            прогнозирования показателей безопасности Нашей целью было выявить
            ключевые факторы, влияющие на уровень безопасности области и
            прогнозировать возможные угрозы для населения.
          </p>
          <img src="../../assets/img/medv.png" alt="медведь" />
        </div>
      </div>
    </section>

    <section>
      <div class="list-wrapper">
        <h1 class="pluses">Преимущества сервиса:</h1>
        <ul>
          <li>
            <div>
              <div class="img-wrap img-wrap-icons">
                <img src="../../assets/img/save.png" alt="Авиарейсы" />
                <h4>
                  Актуальная и надежная информация о безопасности в Пермском
                  крае
                </h4>
              </div>
              <p>
                Предоставляем актуальную и надежную информацию о безопасности в
                регионе, позволяя населению и органам управления оперативно
                принимать меры по защите и предотвращению возможных угроз и
                рисков;
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-wrap img-wrap-icons">
                <img src="../../assets/img/analys.png" alt="Авиарейсы" />
                <h4>Использование современных аналитических методов</h4>
              </div>
              <p>
                Используем современные аналитические методы, такие как анализ
                данных, моделирование и статистические алгоритмы, чтобы
                предоставить систематическую и качественную оценку потенциальных
                опасностей и рисков в Пермском крае;
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-wrap img-wrap-icons">
                <img src="../../assets/img/usefull.png" alt="Авиарейсы" />
                <h4>Удобство использования</h4>
              </div>
              <p>
                Удобен в использовании благодаря своей доступности онлайн и
                интуитивно понятному интерфейсу, что позволяет пользователям
                быстро получать необходимую информацию о текущей обстановке и
                принимать соответствующие меры;
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import BaseIframe from "../base/BaseIframe.vue";

export default {
  name: "main-page",
  components: {
    BaseIframe,
  },
};
</script>

<style lang="scss" scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #f0f0f0;
}

body {
  color: #999999;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-title {
  font-size: 40px;
}

.parallelogram {
  background-color: #02458d;
  color: #fff;
  padding: 20px;
  transform: skew(-20deg);
  transform-origin: left;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);

  img {
    filter: brightness(0%) saturate(100%) invert(100%);
    width: 250px;
  }
}

h4 {
  margin-top: 5px;
}
.parallelogram-text {
  display: flex;
  align-items: center;
  padding: 20px 40px;
}

.upload {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.upload img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pluses {
  text-align: left;
  font-size: 34px;
  margin-left: 20px;
}
.parallelogram p {
  transform: skew(20deg);
  margin: 0;
  font-size: 18px;
  margin-left: 20px;
  word-spacing: 12px;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

section {
  margin: 100px 0;
}

section.section-first {
  margin-top: 0;
}

p,
li {
  text-align: left;
  list-style-type: none;
}
.btn {
  background-color: white;
  border: 1px solid #cccccc;
  //border-radius: 1rem;
  color: #696969;
  padding: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    opacity: 0.8px;
  }

  :visited {
    text-decoration: none;
  }
}

.btn--block {
  display: flex;
  width: 100%;
  text-decoration: none;
  outline: none;

  span {
    text-decoration: none;
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
}

.cards__item {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 50%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
}

.card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}

.card__image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  //filter: saturate(180%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
}

.card__image--flowers {
  background-image: url(https://unsplash.it/800/600?image=82);
}

.card__image--river {
  background-image: url(https://unsplash.it/800/600?image=11);
}

.card__image--record {
  background-image: url(https://unsplash.it/800/600?image=39);
}

.card__image--fence {
  background-image: url(https://unsplash.it/800/600?image=59);
}

.card__title {
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 15px;
  margin-left: 10px;
}

.card__text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  height: 65px;
  overflow-y: overlay;
}

.list-wrapper {
  ul {
    margin-top: 20px;
    padding-left: 16px;
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__task {
    align-items: center;
  }
  li {
    margin: 30px 0;
    display: flex;
    margin-right: 50px;
    font-size: 18px;
    align-items: center;

    width: 33%;
    p {
      max-width: 350px;
    }
    h4 {
      padding-left: 0;
      margin-bottom: 5px;
    }
    img {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
    .img-wrap {
      margin-bottom: 5px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      h4 {
        padding-left: 0;
        margin-bottom: 0px;
      }
      p {
        margin-bottom: 0;
      }
      &-icons {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        img {
          width: 80px;
          height: 80px;
          margin-left: 0px;
          margin-bottom: 15px;
          filter: invert(14%) sepia(92%) saturate(505%) hue-rotate(174deg)
            brightness(139%) contrast(100%);
        }
      }
    }
  }
  .list-wrapper {
    ul {
      margin-top: 20px;
      padding-left: 16px;
      display: flex;
      list-style: none;
      justify-content: space-between;
      align-items: flex-start;
    }
    &__task {
      align-items: center;
    }
    li {
      margin: 30px 0;
      display: flex;
      margin-right: 50px;
      font-size: 18px;
      align-items: center;

      width: 33% !important;

      p {
        max-width: 350px;
      }
      h4 {
        padding-left: 0;
        margin-bottom: 5px;
      }
      img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
      }
      .img-wrap {
        margin-bottom: 5px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        h4 {
          padding-left: 0;
          margin-bottom: 0px;
        }
        p {
          margin-bottom: 0;
        }
        &-icons {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          img {
            width: 80px;
            height: 80px;
            margin-left: 0px;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}
</style>
