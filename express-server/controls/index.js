const models = require("../models");

module.exports = {
  product_id: {
    get: async (req, res) => {
      const productId = req.params.product_id;
      const page = req.query.page;
      const count = req.query.count;
      let result = await models.product_id.get(productId, page, count);
      let returnThis = {
        product_id: productId,
        results: []
      };
      res.send(result);
    },
    post: async (req, res) => {
      const productId = req.params.product_id;
      let result = await models.product_id.post(productId, req.body);
      if (result) {
        res.sendStatus(204);
      } else {
        res.sendStatus(500);
      }
    }
  },
  question_id: {
    get: async (req, res) => {
      const questionId = req.params.question_id;
      const page = req.query.page;
      const count = req.query.count;
      let result = await models.question_id.get(questionId, page, count);
      let returnThis = {
        question: questionId,
        page: page,
        count: count,
        results: []
      };
      res.send(result);
    },
    post: async (req, res) => {
      const questionId = req.params.question_id;
      let result = await models.question_id.post(questionId, req.body);
      if (result) {
        res.sendStatus(204);
      } else {
        res.sendStatus(500);
      }
    }
  },
  questions: {
    helpful: async (req, res) => {
      const questionId = req.params.question_id;
      let result = await models.questions.helpful(questionId);
      if (result) {
        res.sendStatus(204);
      } else {
        res.sendStatus(500);
      }
    },
    report: async (req, res) => {
      const questionId = req.params.question_id;
      let result = await models.questions.report(questionId);
      if (result) {
        res.sendStatus(204);
      } else {
        res.sendStatus(500);
      }
    }
  },
  answers: {
    helpful: async (req, res) => {
      const answerId = req.params.answer_id;
      let result = await models.answers.helpful(answerId);
      if (result) {
        res.sendStatus(204);
      } else {
        res.sendStatus(500);
      }
    },
    report: async (req, res) => {
      const answerId = req.params.answer_id;
      let result = await models.answers.report(answerId);
      if (result) {
        res.sendStatus(204);
      } else {
        res.sendStatus(500);
      }
    }
  }
};
