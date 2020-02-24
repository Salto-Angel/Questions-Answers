const Sequelize = require("sequelize");
const { sequelize: db } = require("../db/sequelize-init");

module.exports = {
  product_id: {
    get: async (productId, page = 1, count = 5) => {
      let query = `SELECT question_id,question_body,question_date,asker_name,helpful as question_helpfulness, reported FROM questions WHERE product_id = ${productId} AND reported = 0 LIMIT ${count} OFFSET ${(page -
        1) *
        count}`;
      let resultArr = await db.query(query).then(async ([result, metadata]) => {
        return result;
      });
      return resultArr;
    },
    post: async (productId, reqBody) => {
      const body = reqBody.body;
      const name = reqBody.name;
      const email = reqBody.email;
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      if (dd < 10) {
        dd = `0${dd}`;
      }
      if (mm < 10) {
        mm = `0${mm}`;
      }
      const date = `${yyyy}-${mm}-${dd}`;
      const query = `INSERT INTO questions (product_id,question_body,question_date,asker_name,asker_email,reported,helpful) VALUES('${productId}','${body}','${date}','${name}','${email}',0,0)`;
      let result = await db.query(query)
        .then(() => {
          return true;
        })
        .catch((err) => {
          console.log(err)
          return false;
        });
      return result;
    }
  },
  question_id: {
    get: async (questionId, page = 1, count = 5) => {
      let query = `SELECT answer_id, body, answer_date as date, answerer_name, helpfulness FROM answers WHERE question_id = ${questionId} AND reported = 0 LIMIT ${count} OFFSET ${(page -
        1) *
        count}`;
      let resultArr = await db.query(query).then(async ([result, metadata]) => {
        return result;
      });
      return resultArr;
    },
    post: async (questionId, reqBody) => {
      const body = reqBody.body;
      const name = reqBody.name;
      const email = reqBody.email;
      const photos = reqBody.photos;
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      if (dd < 10) {
        dd = `0${dd}`;
      }
      if (mm < 10) {
        mm = `0${mm}`;
      }
      const date = `${yyyy}-${mm}-${dd}`;
      const query = `INSERT INTO answers (question_id,body,answer_date,answerer_name,answerer_email,reported,helpfulness) VALUES('${questionId}','${body}','${date}','${name}','${email}',0,0)`;
      let result = await db.query(query)
        .then(() => {
          return true;
        })
        .catch((err) => {
          console.log(err)
          return false;
        });
      return result;
    }
  },
  questions: {
    helpful: async (questionId) => {
      let query = `UPDATE questions SET helpful = helpful + 1 WHERE question_id = ${questionId}`;
      let result = await db
        .query(query)
        .then(([result, metadata]) => {
          return true;
        })
        .catch((err) => {
          return false;
        });
      return result;
    },
    report: async (questionId) => {
      let query = `UPDATE questions SET reported = 1 WHERE question_id = ${questionId}`;
      let result = await db
        .query(query)
        .then(([result, metadata]) => {
          return true;
        })
        .catch((err) => {
          return false;
        });
      return result;
    }
  },
  answers: {
    helpful: async (answerId) => {
      let query = `UPDATE answers SET helpfulness = helpfulness + 1 WHERE answer_id = ${answerId}`;
      let result = await db
        .query(query)
        .then(([result, metadata]) => {
          return true;
        })
        .catch((err) => {
          return false;
        });
      return result;
    },
    report: async (answerId) => {
      let query = `UPDATE answers SET reported = 1 WHERE answer_id = ${answerId}`;
      let result = await db
        .query(query)
        .then(([result, metadata]) => {
          return true;
        })
        .catch((err) => {
          return false;
        });
      return result;
    }
  }
};
