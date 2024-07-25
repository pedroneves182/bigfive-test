function serializeForm(formdata) {
  return Array.from(formdata.entries()).reduce((data, [key, value]) => {
    if (data[key]) {
      data[key] = [].concat(data[key], value);
    } else {
      data[key] = value;
    }
    return data;
  }, {});
}

export default serializeForm;
