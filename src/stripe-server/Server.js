const app = require("express")();
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
  console.log("SERVER req ");
  console.log(req);
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      console.log("Response STATUS");
      console.log(status);
      
      res.json({status});

      console.log("JSON : " + res);
    } catch (err) {
      res.status(500).end();
    }
  });

app.listen(3000, () => console.log("Listening on port 3000"));


// RUN
// npm install express body-parser stripe
// node Server.js