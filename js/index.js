function TitleAndParagraph(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "p",
      null,
      props.description
    )
  );
}

function ListOptions(props) {
  return React.createElement(
    "option",
    { value: props.item },
    props.item
  );
}

function DropdownList(props) {
  return React.createElement(
    "select",
    null,
    React.createElement(ListOptions, { item: props.items[0] }),
    React.createElement(ListOptions, { item: props.items[1] }),
    React.createElement(ListOptions, { item: props.items[2] }),
    React.createElement(ListOptions, { item: props.items[3] })
  );
}

function TitleAndBoxes(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "p",
      null,
      props.boxText,
      React.createElement("input", { id: "checkBox", type: "checkbox" })
    ),
    React.createElement(
      "p",
      null,
      props.dropdownText,
      React.createElement(DropdownList, { items: props.items })
    )
  );
}

function HeaderItem(props) {
  return React.createElement(
    "th",
    null,
    props.item
  );
}

function TableHeaderContents(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(HeaderItem, { item: props.items[0] }),
    React.createElement(HeaderItem, { item: props.items[1] }),
    React.createElement(HeaderItem, { item: props.items[2] }),
    React.createElement(HeaderItem, { item: props.items[3] })
  );
}

function RowItem(props) {
  return React.createElement(
    "td",
    null,
    props.item
  );
}

function CustomButton(props) {
  return React.createElement(
    "button",
    { type: "button" },
    props.contents
  );
}

function TableRowContents(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(RowItem, { item: props.items[0] }),
    React.createElement(RowItem, { item: props.items[1] }),
    React.createElement(RowItem, { item: props.items[2] }),
    React.createElement(
      "td",
      null,
      React.createElement(CustomButton, { contents: "Buy Now" })
    )
  );
}

function CustomTable(props) {
  return React.createElement(
    "table",
    null,
    React.createElement(TableHeaderContents, { items: props.headerItems }),
    React.createElement(TableRowContents, { items: props.rowItems })
  );
}

function TitleAndTable(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(CustomTable, {
      headerItems: props.tableHeaderItems,
      rowItems: props.tableRowItems })
  );
}

function TransportApp(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(TitleAndParagraph, {
      title: "Welcome to React Transportation",
      description: "The best place to buy vehicles online"
    }),
    React.createElement(TitleAndBoxes, {
      title: "Choose Option",
      boxText: "New Only",
      dropdownText: "Select Type",
      items: ["All", "Cars", "Trucks", "Convertibles"]
    }),
    React.createElement(TitleAndTable, {
      title: "Cars",
      tableHeaderItems: ["Year", "Model", "Price", "Buy"],
      tableRowItems: ["2013", "A", "$32000"]
    }),
    React.createElement(TitleAndTable, {
      tableHeaderItems: ["Year", "Model", "Price", "Buy"],
      tableRowItems: ["2011", "B", "$4400"]
    }),
    React.createElement(TitleAndTable, {
      tableHeaderItems: ["Year", "Model", "Price", "Buy"],
      tableRowItems: ["2016", "B", "$15500"]
    }),
    React.createElement(TitleAndTable, {
      title: "Trucks",
      tableHeaderItems: ["Year", "Model", "Price", "Buy"],
      tableRowItems: ["2014", "D", "$18000"]
    }),
    React.createElement(TitleAndTable, {
      tableHeaderItems: ["Year", "Model", "Price", "Buy"],
      tableRowItems: ["2013", "E", "$5200"]
    }),
    React.createElement(TitleAndTable, {
      title: "Convertibles",
      tableHeaderItems: ["Year", "Model", "Price", "Buy"],
      tableRowItems: ["2009", "F", "$2000"]
    }),
    React.createElement(TitleAndTable, {
      tableHeaderItems: ["Year", "Model", "Price", "Buy"],
      tableRowItems: ["2010", "G", "$6000"]
    }),
    React.createElement(TitleAndTable, {
      tableHeaderItems: ["Year", "Model", "Price", "Buy"],
      tableRowItems: ["2012", "H", "$12500"]
    }),
    React.createElement(TitleAndTable, {
      tableHeaderItems: ["Year", "Model", "Price", "Buy"],
      tableRowItems: ["2017", "M", "$50000"]
    })
  );
}

ReactDOM.render(React.createElement(TransportApp, null), document.getElementById("root"));