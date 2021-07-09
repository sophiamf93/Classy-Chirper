import React from "react";
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '', 
      todos: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
       todos: [ 
         ...this.state.todos,
          { id: uuidv4(), task: username: "Obi-wan Kenobi", message: "Use the Force" },
          { id: uuidv4(), task: username: "Mando", message: "This is the way"},
          { id: uuidv4(), task: username: "JarJar Binks", message: "“Yousa need to do that…that thing… "},
        ]
    })
    }, 2000);
  }

  handleSubmit(e) {
      e.preventDefault();
      this.setState({ 
        task: '', 
        todos: [...this.state.todos, { id: uuidv4(), task: this.state.task }] 
      })
  }

  render() {
    return (
      <main>
        <section>
          <div className="main-container">
            <div className="input-div">
              <div className="card-body">
                <div>
                  <textarea
                    className="text-area1"
                    placeholder="Username"
                    onChange={(e) => this.setState({ task: e.target.value })}
                  />
                </div>
                <div>
                  <button onClick={e => this.handleSubmit(e)}>
                    Chirp It!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row justify-content-center mt-3">
            <div className="col-md-6">
                <ul className="list-group">
                    {this.state.todos.map(todo => (
                        <Timeline key={`todo-task-${todo.id}`} todo={todo}
                </ul>
            </div>
        </section>

      </main>
    );
  }
}

export default App;

{
  /* <div>
                  <textarea
                    className="text-area"
                    placeholder="Your thoughts ..."
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div>
                  <a href="#" className="btn" onClick={() => handleSubmit()}>
                    Chirp It!
                  </a>
                </div>
              </div>
            </div>
            <div className="chirps">
              {" "}
              {array.map((chirp) => (
                <Timeline chirp={chirp} />
              ))}
            </div>
            <div>
              <h1>Hello from App Class Component!</h1>
            </div> */
}
