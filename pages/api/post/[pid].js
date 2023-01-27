// export default function handler(req, res) {
//   const { pid } = req.query;
//   res.end(`Post: ${pid}`);
// }

export default (req, res) => {
  const {
    query: { pid },
  } = req;

  if (pid == "1") {
    res.end("One");
  } else if (pid == "2") {
    res.end("Two");
  } else {
    res.end("Something else");
  }

  res.json({ pid });
};
