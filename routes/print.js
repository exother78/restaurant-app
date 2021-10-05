const router = require("express").Router();
const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

let printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: "tcp://192.168.10.7",
});

const printNow = (req, res) => {
  // printer.alignCenter();
  printer.println("Hello world is here");
  printer.newLine();
  printer.alignLeft();
  printer.print("This is Asim Imam and i am good");
  printer.newLine();
  printer.alignLeft();

  printer.print("I am the best bro ever in the history of the mankind ");
  printer.alignLeft();

  // await printer.printImage("./assets/olaii-logo-black.png");
  // printer.cut();

  try {
    let execute = printer.execute();
    console.error("Print done!");
    res.status(200).json({ success: true, msg: "maybe print happened" });
  } catch (error) {
    console.log("Print failed:", error);
    res.status(400).json({ success: false, error: error });
  }
};

router.route("/print").get(printNow);

module.exports = router;
