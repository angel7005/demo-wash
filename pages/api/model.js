import {query} from "/lib/db";

export default async function handler(req, res) {
  let message;
  if (req.method === "GET") {
    const models = await query({
      query: "SELECT * FROM model",
      values: [],
    });
    res.status(200).json({ models: models });
  }

  if (req.method === "POST") {
    const model_name = req.body.model;
    const model_feature = req.body.feature;
    const model_trade = req.body.trade;

    const addModels = await query({
      query: "INSERT INTO model, trade(model, feature, trade) VALUES (?,?,?)",
      values: [model_name, model_feature, model_trade],
    });
    let model = [];
    
    console.log(addModels.insertId);
    if (addModels.insertId) {
      message = "success";      
    } else {
      message = "error";
    }
    model = {
      model_id: addModels.insertId,
      model_name: model_name ,
      model_feature: model_feature,
      model_trade: model_trade
    };
    res.status(200).json({ response: { message: message, model: model } });
  };

  if (req.method === "PUT") {
    const model_id = req.body.model_id;
    const model_name = req.body.model_name;
    const model_feature = req.body.model_feature;
    const model_trade = model_trade;

    const updatemodels = await query({
      query: "UPDATE model SET model = ?, feature=?, trade=? WHERE id = ?",
      values: [model_name, model_feature, model_trade, model_id],
    });

    const result = updatemodels.affectedRows;
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    model = {
      model_id: addModels.insertId,
      model_name: model_name ,
      model_feature: model_feature,
      model_trade: model_trade
    };
    res.status(200).json({ response: { message: message, model: model } });
  }

  if (req.method === "DELETE") {
    const modelId = req.body.model_id;
    const deletemodels = await query({
      query: "DELETE FROM models WHERE model_id = ?",
      values: [modelId],
    });
    const result = deletemodels.affectedRows;
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    res
      .status(200)
      .json({ response: { message: message, model_id: modelId } });
  }
}
