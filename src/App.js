import './App.css';
import ListItem from './ListItem'
import Test from './Test'

function App() {

  const items = [
    'git branch',
    'git add',
    'git status',
    'git diff',
    'git show',
    'git commit',
    'git push',
    'git pull',
    'git checkout',
    'git switch',
    'git fetch',
    'git merge',
    'git log',
    'git revert',
    'git reset',
    'git stash',
    'git aliases'
  ]

  return (
    <div className="App">
      <div style={{fontSize: 64, fontWeight: 700}}>Git</div>
      <div style={{justifyContent: 'left', width: '50%'}}>
        <ul style={{textAlign: 'left', width: 500, background: '#fff3', borderRadius: '0 15px 15px 0'}}>
          {items.map((item, idx) => <ListItem key={idx}>{item}</ListItem>)}
        </ul>
      </div>
      <div style={{marginTop: -300, fontSize: 75}}>
        <Test />
      </div>
    </div>
  );
}

export default App;
