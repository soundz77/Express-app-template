const index = (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Route is set up correctly",
  });
};

export default index;
