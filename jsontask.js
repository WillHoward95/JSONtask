let jsonStr = {
  mortaged: "Y",
  noOfApplicants: "2",
  firstProperty: "Y",
  buyingReadiness: "Viewing",
  occupying: "N",
  customerIntention: "Buy",
  remoReadiness: "Researching",
};

//format yes/no values
let yes_no = function (value) {
  if (value === "Y" || value === "y" || value === "YES" || value === "yes") {
    return true;
  } else if (
    value === "N" ||
    value === "n" ||
    value === "NO" ||
    value === "no"
  ) {
    return false;
  }
};

//formats values properly
let formatter = function (obj) {
  const keys = Object.keys(obj);

  keys.forEach((property) => {
    //turn y/n answers to true/false
    if (typeof yes_no(obj[property]) == "boolean") {
      obj[property] = yes_no(obj[property]);
    }

    //checks if the object property can be parseInted and if so does it
    if (isNaN(parseInt(obj[property]))) {
    } else {
      obj[property] = parseInt(obj[property]);
    }
  });
  console.log(obj);
};

formatter(jsonStr);
