import './App.css';
import Header from './components/Header';
import AddContact from './pages/AddContact';
import ContactList from './pages/ContactList';

const App = () => {
  const contacts = [
    {
      id: "1",
      name: "Enson",
      email: "text@test.com"
    }, {
      id: "2",
      name: "Jason",
      email: "abc@dc.com"
    }
  ];

  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
