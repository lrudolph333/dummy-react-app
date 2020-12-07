import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
  <div>
      <div class="header">
          <h1>
              My To-Do list
          </h1>
      </div>
      <div id="addNewTodoContainer">
          <form>
              <h5>
                  Add New To-Do
              </h5>
              <div class="form-group">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" id="addButton">Add</button>
          </form>
      </div>
      <div id="todoListContainer">
          <h5>
              Current To-Do List
          </h5>
          <ul class="list-group">

          </ul>
      </div>
  </div>
  );
}

export default App;
