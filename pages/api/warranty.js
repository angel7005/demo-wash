import {query} from "/lib/db";

export default async function handler(req, res) {
  let message;
  if (req.method === "GET") {    
    const warranty_serialNumber = req.query.serial_number;
    const warranty_id = req.query.id;

    const warranties = await query({
      query: warranty_serialNumber ? "SELECT * FROM warranty WHERE serial_number=?":
             warranty_id ? "SELECT * FROM warranty WHERE id=?"
                         : "SELECT * FROM warranty" ,
      values: warranty_serialNumber ? [warranty_serialNumber] :
              warranty_id ? [warranty_id] 
                          : [],
    });
    if(warranty_serialNumber || warranty_id) {
      res.status(200).json({ warranty : warranties[0] });
    }
    else {
      res.status(200).json({ warranties: warranties });
    }
  }

  if (req.method === "POST") {
    const warranty_serial_number = req.body.serial_number;
    const warranty_model = req.body.model;
    const warranty_date_sale = req.body.date_sale;
    const warranty_days_warranty = req.body.days_warranty;
    const warranty_descriptions = req.body.descriptions;

    const addwarranties = await query({
      query: "INSERT INTO warranty (serial_number, model, date_sale,days_warranty, descriptions) VALUES (?,?,?,?,?)",
      values: [warranty_serial_number, warranty_model, warranty_date_sale, warranty_days_warranty, warranty_descriptions],
    });
    let warranty = [];
        
    if (addwarranties.insertId) {
      message = "success";      
    } else {
      message = "error";
    }
    warranty = {
      id: addwarranties.insertId,
      serial_number: warranty_serial_number,
      model: warranty_model, 
      date_sale: warranty_date_sale,
      days_warranty: warranty_days_warranty,
      descriptions: warranty_descriptions
    };
    res.status(200).json({ response: { message: message, warranty: warranty } });
  }

  if (req.method === "PUT") {
    const warranty_id = req.body.id;
    const warranty_serial_number = req.body.serial_number;
    const warranty_model = req.body.model;
    const warranty_date_sale = req.body.date_sale;
    const warranty_days_warranty = req.body.days_warranty;
    const warranty_descriptions = req.body.descriptions;

    const updatewarranties = await query({
      query: "UPDATE warranty SET serial_number = ?, model=?, date_sale=?, days_warranty=?, descriptions=? WHERE id = ?",
      values: [warranty_serial_number, warranty_model, warranty_date_sale,warranty_days_warranty,warranty_descriptions,warranty_id],
    });
    const result = updatewarranties.affectedRows;    
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    let warranty = [];
     warranty = {
      id: warranty_id,
      serial_number: warranty_serial_number,
      model: warranty_model,
      date_sale: warranty_date_sale,
      days_warranty: warranty_days_warranty,
      descriptions: warranty_descriptions
    };    
    res.status(200).json({ response: { message: message, warranty: warranty } });
  }   
  if (req.method === "DELETE") {   
    const warrantyId = req.query.id;
    const deletewarranties = await query({
      query: "DELETE FROM warranty WHERE id = ?",
      values: [warrantyId],
    });
    const result = deletewarranties.affectedRows;
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    res
      .status(200)
      .json({ response: { message: message, id: warrantyId } });
  }
}
