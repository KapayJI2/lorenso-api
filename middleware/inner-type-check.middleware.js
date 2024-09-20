class DataType {
  name;
  age;
  sex;
  id;
  convertData() {
    try {
      console.log("22: ", /^[a-zA-Z]+$/.test(this.name));
      if (
        typeof this.name !== "string" ||
        !/^[a-zA-Z]+$/.test(this.name) ||
        !/^[а-яА-Я]+$/.test(this.name)
      ) {
        this.name = "Иван";
      }

      if (typeof this.age !== "number") {
        this.age = +this.age || 20;
      }

      if (
        typeof this.sex !== "string" ||
        this.sex !== "М" ||
        this.sex !== "Ж"
      ) {
        this.sex = "М";
      }
    } catch (e) {
      console.error(e);
      throw new Error(e.message);
    }
  }
}

function ObjectToDataCast(obj) {
  let data = new DataType();
  Object.assign(data, obj);
  data.convertData();
  return data;
}

export function InnerTypeCheckMiddleware(req, res, next) {
  req.body = ObjectToDataCast(req.body);
  return next();
}
