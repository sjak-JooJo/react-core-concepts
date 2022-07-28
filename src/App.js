import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [{name: 'Dr. Mahfuz', job: 'Singer'},
          {name: 'joojo', job: 'pator'},
          {name: 'agun', job: 'sopno'},
          {name: 'sumon', job: 'alo'}];
const singer2 = {name: 'Eva Rahman', job:'Singer2' }


const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Kuber', 'Jashim','Salman Sha','Riyaz', 'Razzak']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      <Person name={nayoks[0]} nayika ="moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person>
      <h5>New component. YAY</h5>
      <p id='totocompany'>Rock mama React mama</p>
      <Friend movie="Shingam" phone="01777777"></Friend>
      <Friend phone="01999999"></Friend>
    </div>
  );
}

function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props){
  console.log(props);
  return (
    <div className='container'>
      <h3>Name : {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
