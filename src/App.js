import './App.css';
import ListItem from './ListItem'

function App() {

  const items = [
    'git clone',
    'git branch | --sort=-committerdate',
    'git add',
    'git status',
    'git commit | --amend',
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
      <ul style={{textAlign: 'left', marginLeft: 400}}>
        {items.map((item, idx) => <ListItem key={idx}>{item}</ListItem>)}
      </ul>
    </div>
  );
}

export default App;
