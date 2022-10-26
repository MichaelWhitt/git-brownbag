import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{fontSize: 64, fontWeight: 700}}>Git</div>
      <ul style={{textAlign: 'left', marginLeft: 400}}>
        <li>git clone | branch --sort | add | commit | push</li>
        <li>git checkout | git log --oneline --pretty</li>
        <li>git commit | revert | reset --soft / --hard </li>
        <li>git diff | git stash | git apply</li>
        <li>git aliases</li>
      </ul>
    </div>
  );
}

export default App;
