import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";

const Paypal = (props) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <PayPalButtons
        fundingSource={FUNDING.PAYPAL}
        // style={{ layout: "horizontal" }}
        // createBillingAgreement={(data) =>
        //   console.log("create Billing agreement: ", data)
        // }
        onApprove={(data) => console.log("onApprove: ", data)}
        onError={(err) => console.log("error occured: ", err)}
        onInit={(data) => console.log("on init: ", data)}
        createOrder={(data, actions) => {
          console.log("data: ", data);
          console.log("actions: ", actions);
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "2.00",
                },
              },
            ],
          });
        }}
        onCancel={(e) => console.log("cancelled payment: ", e)}
        // disabled
        style={{
          layout: "horizontal",
          label: "checkout",
          height: 40,
        }}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal;
// import React from "react";
// import PaypalExpressBtn from "react-paypal-express-checkout";

// const Paypal = (props) => {
//   const nodeRef = React.useRef(null);
//   let env = "sandbox"; // you can set here to 'production' for production
//   let currency = "USD"; // or you can set this value from your props or state
//   let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
//   // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

//   const client = {
//     sandbox:
//       "Ac8o4swJtckfwVOCnGLmPeW4KuApWFOLBx4LLW8TcnUD7t5AkSBU6i1yeuPK822ps6QJt-5gL9swQsWI",
//     production: "YOUR-PRODUCTION-APP-ID",
//   };

//   const onSuccess = (payment) => {
//     // Congratulation, it came here means everything's fine!
//     console.log("The payment was succeeded!", payment);
//     // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
//     console.log("this is total amount: ", props.total);
//     // if (props.total === undefined) {
//     //   console.log("Empty: ", props.total);
//     // } else if (props.total !== undefined && props.total !== null) {
//     // }
//   };

//   const onError = (data) => {
//     // User pressed "cancel" or close Paypal's popup!
//     console.log("The payment was cancelled!", data);
//     // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
//   };

//   const onCancel = (err) => {
//     // The main Paypal's script cannot be loaded or somethings block the loading of that script!
//     console.log("Error!", err);
//     // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
//     // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
//   };

//   const styles = {
//     size: "medium",
//     color: "blue",
//     shape: "rect",
//     label: "checkout",
//   };
//   return (
//     <PaypalExpressBtn
//       env={env}
//       nodeRef={nodeRef}
//       client={client}
//       currency={currency}
//       total={total}
//       onError={onError}
//       onSuccess={onSuccess}
//       onCancel={onCancel}
//       style={styles}
//     />
//   );
// };

// export default Paypal;

// // export default class Paypal extends React.Component {
// //   render() {
// // const onSuccess = (payment) => {
// //   // Congratulation, it came here means everything's fine!
// //   console.log("The payment was succeeded!", payment);
// //   // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
// //   console.log("total amount: ", this.props.total);
// // };

// //     const onCancel = (data) => {
// //       // User pressed "cancel" or close Paypal's popup!
// //       console.log("The payment was cancelled!", data);
// //       // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
// //     };

// //     const onError = (err) => {
// //       // The main Paypal's script cannot be loaded or somethings block the loading of that script!
// //       console.log("Error!", err);
// //       // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
// //       // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
// //     };

// //     let env = "sandbox"; // you can set here to 'production' for production
// //     let currency = "USD"; // or you can set this value from your props or state
// //     let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
// //     // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

// //     const client = {
// //       sandbox:
// //         "Ac8o4swJtckfwVOCnGLmPeW4KuApWFOLBx4LLW8TcnUD7t5AkSBU6i1yeuPK822ps6QJt-5gL9swQsWI",
// //       production: "YOUR-PRODUCTION-APP-ID",
// //     };
// //     // In order to get production's app-ID, you will have to send your app to Paypal for approval first
// //     // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
// //     //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
// //     // For production app-ID:
// //     //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

// //     // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!

// //     const styles = {
// //       size: "medium",
// //       color: "blue",
// //       shape: "rect",
// //       label: "checkout",
// //     };
// //     return (
// //       <PaypalExpressBtn
// //         env={env}
// //         client={client}
// //         currency={currency}
// //         total={total}
// //         onError={onError}
// //         onSuccess={onSuccess}
// //         onCancel={onCancel}
// //         style={styles}
// //       />
// //     );
// //   }
// // }
