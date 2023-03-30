let jsonStr = {
  mortaged: "Y",
  noOfApplicants: "2",
  firstProperty: "Y",
  buyingReadiness: "Viewing",
  occupying: "N",
  customerIntention: "Buy",
  remoReadiness: "Researching",
};

// handling boolean values
for (const property in jsonStr) {
  if (jsonStr[property] === "Y") {
    jsonStr[property] = true;
  } else if (jsonStr[property] === "N") {
    jsonStr[property] = false;
  }
}

// handling string numbers
for (const value in jsonStr) {
  if (isNaN(parseInt(jsonStr[value]))) {
    continue;
  } else {
    jsonStr[value] = parseInt(jsonStr[value]);
  }
}

console.log(jsonStr);
