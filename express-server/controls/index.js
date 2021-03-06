const models = require("../models");
const client = require("../../cache/index.js");

module.exports = {
  product_id: {
    get: async (req, res) => {
      const productId = req.params.product_id;
      const page = req.query.page || 1;
      const count = req.query.count || 5;
      const memcache = `product_id_get_${productId}_${page}_${count}`;
      client.getAsync(memcache).then(async (cache) => {
        if (!cache) {
          let result = await models.product_id.get(productId, page, count);
          let returnThis = {
            product_id: productId,
            results: result
          };
          client.setAsync(memcache, JSON.stringify(returnThis));
          res.send(returnThis);
        } else {
          res.send(JSON.parse(cache));
        }
      });
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
      const page = req.query.page || 1;
      const count = req.query.count || 5;
      const memcache = `product_id_get_${questionId}_${page}_${count}`;
      client.getAsync(memcache).then(async (cache) => {
        if (!cache) {
          let result = await models.question_id.get(questionId, page, count);
          let returnThis = {
            question: questionId,
            page: page,
            count: count,
            results: result
          };
          client.setAsync(memcache, JSON.stringify(returnThis));
          res.send(returnThis);
        } else {
          res.send(JSON.parse(cache));
        }
      });
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
