import "./App.css";
import TodosWraper from "./component/TodosWraper";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10  mt-5">
            <div className="main-form">
              <div className="container">
                <div className="row">
                  <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                  <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                    <TodosWraper />
                    
                  </div>
                  <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
        </div>
      </div>
    </>
  );
}

export default App;
