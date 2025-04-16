import Photo from "./Picture.jpeg";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="name-header">
        <span className="label">Jack & Chiau</span>
      </div>
      <div className="image-container">
        <img src={Photo} />
        <span className="embed-text">We're Getting Married!</span>
      </div>

      <div className="info-container">
        <div className="circle" style={{ top: 10, left: 0 }}></div>
        <div className="circle" style={{ top: 10, right: 0 }}></div>
        <div className="circle" style={{ bottom: -10, left: 0 }}></div>
        <div className="circle" style={{ bottom: -10, right: 0 }}></div>
        <div className="content">
          <div style={{ width: "80%", margin: "0 auto 30px auto" }}>
            <div style={{ textAlign: "left" }}>
              <div>Jack</div>
              <div style={{ marginLeft: 20 }}>Tiew</div>
            </div>
            <div style={{ textAlign: "center" }}>&</div>
            <div style={{ textAlign: "right" }}>
              <div>Chiau Wen</div>
              <div>Chua</div>
            </div>
          </div>
          <div style={{ marginBottom: 30 }}>#JACKANDCHIAU</div>
          <div style={{ marginBottom: 40 }} className="content-date">
            <div style={{ fontSize: 12 }}>December</div>
            <div style={{ fontSize: 36 }}>29</div>
            <div>2025</div>
          </div>
          <div className="content-location">
            <span>Hao Xiang Chi Seafood</span>
            <span>好想吃酒家</span>
            <span>@Setia Alam</span>a
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
