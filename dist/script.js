const { useState } = React;

function Display({ value }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "display", id: "display" },
    value));


}

function Buttons({
  value,
  setValue,
  decimalAllowed,
  setDecimalAllowed })
{
  //const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const numbers = [
  { label: "seven", value: 7 },
  { label: "eight", value: 8 },
  { label: "nine", value: 9 },
  { label: "four", value: 4 },
  { label: "five", value: 5 },
  { label: "six", value: 6 },
  { label: "one", value: 1 },
  { label: "two", value: 2 },
  { label: "three", value: 3 }];

  //const opertators = ["/", "*", "-", "+", "="];
  const operators = [
  { label: "divide", value: "/" }, //that
  { label: "multiply", value: "*" },
  { label: "subtract", value: "-" },
  { label: "add", value: "+" }];


  const zero = [{ label: "zero", value: "0" }];

  const decimals = [{ label: "decimal", value: "." }];

  const equals = [{ label: "equals", value: "=" }];

  const clear = [{ label: "clear", value: "AC" }];

  // if last char of value is in array:operators {value} => value's value

  let onNumberButton = number => {
    if (value === "0") {
      setValue(String(number));
    } else {
      setValue(value + number);
    }
  };

  let onZeroButton = zero => {
    if (value === "0") {
      return;
    }
    setValue(value + zero);
  };

  let onOperatorButton = operator => {
    if (operators.map(operator => operator.value).includes(value.slice(-1))) {
      return;
    }
    setDecimalAllowed(0);
    console.log(decimalAllowed);
    return setValue(value + operator);
  };

  let onDecimalButton = decimal => {
    if (decimalAllowed === 0) {
      setValue(value + decimal);
      setDecimalAllowed(1);
      console.log(decimalAllowed);
    }
    return;
  };

  let onEqualsButton = () => {
    setValue(String(eval(value)));
  };

  let onClearButton = () => {
    setValue("0");
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", null,
    clear.map((cl) => /*#__PURE__*/
    React.createElement("button", {
      className: "btn",
      key: cl.label,
      id: cl.label,
      onClick: () => onClearButton(cl.value) },

    cl.value))), /*#__PURE__*/



    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("div", { className: "numbuttons" },
    numbers.map((num) => /*#__PURE__*/
    React.createElement("button", {
      className: "btn",
      key: num.label,
      id: num.label,
      onClick: () => onNumberButton(num.value) },

    num.value))), /*#__PURE__*/




    React.createElement("div", { className: "opbuttons" },
    operators.map((op) => /*#__PURE__*/
    React.createElement("button", {
      className: "btn",
      key: op.label,
      id: op.label,
      onClick: () => onOperatorButton(op.value) },

    op.value))), /*#__PURE__*/




    React.createElement("div", { className: "bottom-row" },
    zero.map((z) => /*#__PURE__*/
    React.createElement("button", {
      className: "btn zero",
      key: z.label,
      id: z.label,
      onClick: () => onZeroButton(z.value) },

    z.value)),



    decimals.map((d) => /*#__PURE__*/
    React.createElement("button", {
      className: "btn",
      key: d.label,
      id: d.label,
      onClick: () => onDecimalButton(d.value) },

    d.value)),



    equals.map((e) => /*#__PURE__*/
    React.createElement("button", {
      className: "btn",
      key: e.label,
      id: e.label,
      onClick: () => onEqualsButton(e.value) },

    e.value))))));






}

function App() {
  const [value, setValue] = useState("0");
  const [decimalAllowed, setDecimalAllowed] = useState(0);

  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/

    React.createElement("div", { className: "Calculator" }, /*#__PURE__*/
    React.createElement(Display, { value: value, setValue: setValue }), /*#__PURE__*/
    React.createElement(Buttons, {
      value: value,
      setValue: setValue,
      decimalAllowed: decimalAllowed,
      setDecimalAllowed: setDecimalAllowed }))));




}

const rootElement = document.getElementById("root");
ReactDOM.render( /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(App, null)),

rootElement);