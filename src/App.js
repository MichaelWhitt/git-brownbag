import './App.css';
import ListItem from './ListItem'
import Test from './test'

function App() {

  const items = [
    'git branch | --sort=-committerdate',
    'git add filename',
    'git rm filename',
    'git status',
    'git commit | --amend -m \'new msg\' ',
    'git push',
    'git checkout branch or commit | git checkout -b',
    'git fetch',
    'git switch',
    'git log | -numAmount --oneline | --pretty',
    'git revert',
    'git reset --soft | --hard',
    'git diff and inspector',
    'git stash',
    'git pop',
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
