import axios from "axios";

export default {
  GET_GRAPH_FROM_API({ commit }, graphParams) {
    return axios(
      `http://45.86.180.208:8000/get_preds/?name=${graphParams.name}&date=${graphParams.date}`,
      {
        method: "GET",
      }
    )
      .then((graph) => {
        if (graph.data.status === 400) {
          alert(
            `Ошибка ${graph.status.response.status}: ${graph.status.response.data.error}`
          );
        }
        commit("SET_GRAPH_TO_STATE", graph.data);
        return graph;
      })
      .catch((error) => {
        if (error instanceof TypeError) {
          alert("Ошибка: Некорректные данные или данных нет.");
        } else {
          alert("Произошла непредвиденная ошибка");
        }
      });
  },

  GET_PREDICT_FROM_API({ commit }, graphParams) {
    return axios(
      `http://45.86.180.208:8000/get_weather_data/?name=${graphParams.name}&date=${graphParams.date}`,
      {
        method: "GET",
      }
    )
      .then((graph) => {
        if (graph.data.status === 400) {
          alert(
            `Ошибка ${graph.status.response.status}: ${graph.status.response.data.error}`
          );
        }
        commit("SET_PREDICT_TO_STATE", graph.data);
        return graph;
      })
      .catch((error) => {
        if (error instanceof TypeError) {
          alert("Ошибка: Некорректные данные или данных нет.");
        } else {
          alert("Произошла непредвиденная ошибка");
        }
      });
  },

  GET_COLORS_FROM_API({ commit }, graphParams) {
    return axios(
      `http://45.86.180.208:8000/get_preds_colors/?name=${graphParams.name}&date=${graphParams.date}`,
      {
        method: "GET",
      }
    )
      .then((graph) => {
        if (graph.data.status === 400) {
          alert(
            `Ошибка ${graph.status.response.status}: ${graph.status.response.data.error}`
          );
        }
        commit("SET_COLORS_TO_STATE", graph.data);
        return graph;
      })
      .catch((error) => {
        if (error instanceof TypeError) {
          alert("Ошибка: Некорректные данные или данных нет.");
        } else {
          alert("Произошла непредвиденная ошибка");
        }
      });
  },

  GET_INFO_FROM_API({ commit }, graphParams) {
    return axios(
      `http://45.86.180.208:8000/get_past_desaster_data/?&date=${graphParams.date}`,
      {
        method: "GET",
      }
    )
      .then((graph) => {
        if (graph.data.status === 400) {
          alert(
            `Ошибка ${graph.status.response.status}: ${graph.status.response.data.error}`
          );
        }
        commit("SET_INFO_TO_STATE", graph.data);
        return graph;
      })
      .catch((error) => {
        if (error instanceof TypeError) {
          alert("Ошибка: Некорректные данные или данных нет.");
        } else {
          alert("Произошла непредвиденная ошибка");
        }
      });
  },

  GET_ALLINFO_FROM_API({ commit }, graphParams) {
    return axios(
      `http://45.86.180.208:8000/get_past_7d_info_data_all_kraj/?&date=${graphParams.date}`,
      {
        method: "GET",
      }
    )
      .then((graph) => {
        console.log(graph.data);
        if (graph.data.status === 400) {
          alert(
            `Ошибка ${graph.status.response.status}: ${graph.status.response.data.error}`
          );
        }
        commit("SET_ALLINFO_TO_STATE", graph.data);
        return graph;
      })
      .catch((error) => {
        if (error instanceof TypeError) {
          alert("Ошибка: Некорректные данные или данных нет.");
        } else {
          alert("Произошла непредвиденная ошибка");
        }
      });
  },
};
