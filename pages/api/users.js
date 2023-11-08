import {query} from "/lib/db";

export default async function handler(req, res) {
  let message;
  if (req.method === "GET") {    
    const alias = req.query.alias;
    const user_id = req.query.id;

    const users = await query({
      query: alias ? "SELECT * FROM user WHERE alias=?":
             user_id ? "SELECT * FROM user WHERE id=?"
                         : "SELECT * FROM user" ,
      values: alias ? [warranty_serialNualiasmber] :
              user_id ? [user_id] 
                          : [],
    });
    if(alias || user_id) {
      res.status(200).json({ user : users[0] });
    }
    else {
      res.status(200).json({ user: users });
    }
  }

  if (req.method === "POST") {    
      const username = req.body.username;
      const alias    = req.body.alias;
      const avatar   = req.body.avatar;
      const movil    = req.body.movil;
      const mail    = req.body.mail;
      const role     = req.body.role;
      const address  = req.body.address;
      const password = req.body.password;

    const user_added = await query({
      query: "INSERT INTO user (username, alias, avatar, movil, mail, role, address, password) VALUES (?,?,?,?,?,?,?,?)",
      values: [username, alias, avatar, movil, mail, role, address, password],
    });
    
    let userNew =[];
    
    if (user_added.insertId) {
      message = "success";      
    } else {
      message = "error";
    }
    
    userNew = {
        id: user_added.insertId,
        username: username, 
        movil: movil, 
        address: address, 
        alias: alias, 
        password: password, 
        role: role, 
        mail: mail,
        avatar: avatar
    };
    console.log('........userNew, id' + JSON.stringify(userNew) + ',....with id:' + JSON.stringify(user_added));
    res.status(200).json({ response: { message: message, user: userNew, dt:userNew } });
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
