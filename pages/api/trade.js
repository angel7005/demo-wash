import {query} from "/lib/db";

export default async function handler(req, res) {
  let message;
  if (req.method === "GET") {
    const trades = await query({
      query: "SELECT * FROM trade",
      values: [],
    });
    res.status(200).json({ trades: trades });
  }

  if (req.method === "POST") {
    const trade_name = req.body.trade;
    const trade_url = req.body.url;
    const trade_observations = req.body.descriptions;

    const addTrades = await query({
      query: "INSERT INTO trade (trade, url, descriptions) VALUES (?,?,?)",
      values: [trade_name, trade_url, trade_observations],
    });
    let trade = [];
    
    console.log(addTrades.insertId);
    if (addTrades.insertId) {
      message = "success";      
    } else {
      message = "error";
    }
    trade = {
      product_id: addTrades.insertId,
      trade: trade_name,
      url: trade_url,
      observations: trade_observations
    };
    res.status(200).json({ response: { message: message, trade: trade } });
  }

  if (req.method === "PUT") {
    const trade_id = req.body.id
    const trade_name = req.body.trade;
    const trade_url = req.body.url;
    const trade_descriptions = req.body.descriptions;

    const updateTrades = await query({
      query: "UPDATE trade SET trade=?, url=?, descriptions=? WHERE id=? ",
      values: [trade_name, trade_url, trade_descriptions, trade_id],
    });
    
    const result = updateTrades.affectedRows;
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    const trade = {
      id: trade_id,
      trade: trade_name,
      url: trade_url,
      descriptions: trade_descriptions
    };
    res.status(200).json({ response: { message: message, trade: trade } });
  }

  console.log('api.delete.body.id: ' + req.body.id);
  console.log('api.delete.method: ' + req.method);

  if (req.method === "DELETE") {    
    const tradeId = req.body.id;
    console.log('api.delete: ' + req.body.id);
    const deleteTrades = await query({
      query: "DELETE FROM trade WHERE id = ?",
      values: [tradeId],
    });
    const result = deleteTrades.affectedRows;
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    res
      .status(200)
      .json({ response: { message: message, id: tradeId } });
  }
}
