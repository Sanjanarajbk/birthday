const Meal = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          justifyContent: "space-evenly",
          textAlign: 'center'
        }}
      >
        <text style={{ margin: "auto", fontSize: "40px" }}>Grasshopper</text>
        
        <a href="https://g.co/kgs/vtxg8JL" target="_blank">
          Checkout here
        </a>
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: 'center'
        }}
      >
        <text style={{ margin: "auto", fontSize: "40px" }}>
          Alba (JW Marriott)
        </text>
        <a href="https://g.co/kgs/vtxg8JL" target="_blank">
          <text> Checkout here</text>
        </a>
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: 'center'
        }}
      >
        <text style={{ margin: "auto", fontSize: "40px" }}>
          Any other suggestions are welcome &#10084;
        </text>
      </div>
    </div>
  );
};

export default Meal;
