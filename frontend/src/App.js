import logo from './logo.svg';
import './App.css';
import Body1 from './Components/Body1/Body1';
import Body2 from './Components/Body2/Body2';
import Started from './Components/get_started/Started';
import Questions from './Components/Questions/Questions';
import { questions } from './data';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Body1 />
      <Body2 />
      <Started />
      <QuestionTab />
      
    </div>
  );
}



const QuestionTab = () =>{
  return (
    <span className='question_tab_main'>
      <span>GOT QUESTIONS ?</span>
      {questions.map((foog) => {
        return <Questions ques={foog.ques} ans={foog.ans} />;
      })}
    </span>
  );
}

export default App;
