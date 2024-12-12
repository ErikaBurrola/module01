let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let erika = 'Erika Burrola';
let Alejandro = 'Alejandro Lopez';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: 'blue',
    fontSize: '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol.toUpperCase()), /*#__PURE__*/React.createElement("li", null, erika), /*#__PURE__*/React.createElement("li", null, Alejandro));
ReactDOM.render(element, document.getElementById('content'));

/*const ul = React.createElement(
//segundo comentado
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>Sally Smith</li>
        <li>Mark Martin</li>
        <li>Holly Unlikely</li>
    </ul>
    /*'ul', //primer comentado
    { style: {'color': 'blue', 'font-size': '24px' } },
    React.createElement('li', null, 'Sally Smith'),
    React.createElement('li', null, 'Mark Martin'),
    React.createElement('li', null, 'Holly Unlikely')
)
ReactDOM.render(ul, document.getElementById('content'))


 const element = React.createElement(
        'div', 
        {title: 'Outer div'}, 
        React.createElement('h1',null,'Hello world')
    
)

ReactDOM.render(element,document.getElementById('content'))

ReactDOM.render(
    React.createElement(
        'div', 
        {title: 'Outer div'}, 
        'Hello World!'
    ),
    document.getElementById('content')
)*/