import * as fs from "fs";

export function WriteData(data) {
  let file_data = fs.readFileSync("./db/db.json", "utf-8");
  if (!file_data) {
    file_data = [];
  } else {
    file_data = JSON.parse(file_data);
  }
  data.id = file_data.length + 1;
  file_data.push(data);
  fs.writeFileSync("./db/db.json", JSON.stringify(file_data), "utf-8");
}
export function GetData(id) {
  let file_data = fs.readFileSync("./db/db.json", "utf-8");
  if (!file_data) {
    file_data = [];
  } else {
    file_data = JSON.parse(file_data);
  }
  if (id) {
    id = parseInt(id);
    if (!Number.isInteger(id) || id <= 0 || !Number.isFinite(id)) {
      throw new Error("ID должен быть положительным целым числом ");
    }
    return file_data.find((item) => item.id === id);
  } else {
    return file_data;
  }
}
export function UpdateData(data) {
  try{
    let file_data = fs.readFileSync("./db/db.json", "utf-8");
    if(!file_data){
      throw new Error("БД не содержит ни одной записи")
    }
    file_data = JSON.parse(file_data);
    file_data = file_data.map((item) => {
      if (item.id === data.id) {
        item = data;
        console.log(item)
        return item;
      }
      return item;
    });
    fs.writeFileSync("./db/db.json", JSON.stringify(file_data), "utf-8");
  }catch(e){
    console.error(e);
    throw new Error(e.message)
  }
}
export function DeleteData(id) {
  try{
    if (id) {
      id = parseInt(id);
      if (!Number.isInteger(id) || id <= 0 || !Number.isFinite(id)) {
        throw new Error("ID должен быть положительным целым числом ");
      }
    }else{
      fs.writeFileSync("./db/db.json", JSON.stringify([]), "utf-8");
      return;
    }
    let file_data = fs.readFileSync("./db/db.json", "utf-8");
    if(!file_data){
      throw new Error("БД не содержит ни одной записи")
    }
    file_data = JSON.parse(file_data);
    file_data = file_data.filter((item) => item.id !== id);
    fs.writeFileSync("./db/db.json", JSON.stringify(file_data), "utf-8");
  }catch(e){
    console.error(e);
    throw new Error(e.message)
  }
}
