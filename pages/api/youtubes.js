import React from "react";

export default (req, res) => {
  // res.json({ data: [1, 2, 3, 4] });
  // res.end("I Love codeMobiles");
  // res.end();

  //   if (req.method === "POST") {
  //     res.json({ method: "POST" });
  //   } else {
  //     res.json({ method: "GET" });
  //   }

  res.json({ method: req.method });
};
