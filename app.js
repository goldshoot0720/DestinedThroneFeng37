const root = ReactDOM.createRoot(document.getElementById("root"));

function Feng37() {
  return (
    <React.Fragment>
      <style>
        {`
          @keyframes App-logo-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <header
        style={{
          backgroundColor: "black",
          color: "white",
          minHeight: "25vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <img
            src="logo.svg"
            alt="logo"
            style={{
              width: "10%",
              animation: "App-logo-spin infinite 20s linear", // Apply rotation animation
            }}
          />
          <img
            src="IMG_0032.jpg"
            alt="cat"
            style={{
              width: "10%",
            }}
          />
        </div>
        <h1 style={{ marginBottom: "10px" }}>大位天定</h1> {/* Reduced margin-bottom */}
      </header>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
          textAlign: "center",
        }}
      >
        {/* White background with black text */}
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            borderRadius: "10px",
            width: "80%", // To control the width of the content
            marginTop: "10px", // Reduced margin-top
          }}
        >
          <p>經歷：</p>
          <p>委任第五職等(高考三級資訊處理榜首)</p>
          <p>……</p>
          <p>簡任第十二職等(相當於政務官)</p>
          <p>……</p>
          威力彩頭獎得主
          <p>……</p>        
          <p>臺北市長候選人(相當於第12屆)</p>
          <p>……</p>
          <p>總統(相當於第23任)</p>
        </div>
      </main>

      {/* Added a second section with consistent design */}
      <main
        style={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
          textAlign: "center",
        }}
      >
        <p>桃園縣立東興國民中學第十七屆畢業紀念冊</p>
        <p>學生數：33</p>
        <p>班級：5、12、18、23</p>
        <p>5◡12：委任第五職等◡簡任第十二職等</p>
        <p>12◡18：臺北市第12屆市長◡臺北市議會第18屆議員</p>
        <p>18◡23：第18屆立法委員◡第23任總統副總統</p>
        <p>5◡23：5班◡23號</p>
        <p>座號和：1號+32號</p>
      </main>

            <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
          textAlign: "center",
        }}
      >
        {/* White background with black text */}
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            borderRadius: "10px",
            width: "80%", // To control the width of the content
            marginTop: "10px", // Reduced margin-top
          }}
        >
          <p>學歷：</p>
          <p>中原大學資訊工程學系學士</p>
          <p>出生年月日：77 年 11 月 27 日</p>
          <p>性別：男</p>
          <p>出生地：桃園市</p>
          <p>政見：尚無</p>
          <p>推薦之政黨：尚無</p>
          <p>號次·姓名：尚無·黃○鋒(鋒兄)</p>
        </div>
      </main>
    </React.Fragment>
  );
}

// Render the React component to the DOM
root.render(<Feng37 />);
