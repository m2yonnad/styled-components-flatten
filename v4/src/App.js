import React, { Component } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 20px;
  height: 20px;
  margin: 10px;
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  color: ${props => (props.propC ? "red" : "blue")};
  border-color: ${props => (props.propD ? "red" : "blue")};
  border-size: ${props => (props.propE ? "2px" : "3px")};
`;

const Box2 = styled.div`
  width: 20px;
  height: 20px;
  margin: 10px;
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  color: ${props => (props.propC ? "red" : "blue")};
  border-color: ${props => (props.propD ? "red" : "blue")};
  border-size: ${props => (props.propE ? "2px" : "3px")};
`;

const Box3 = styled.div`
  width: 20px;
  height: 20px;
  margin: 10px;
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  color: ${props => (props.propC ? "red" : "blue")};
  border-color: ${props => (props.propD ? "red" : "blue")};
  border-size: ${props => (props.propE ? "2px" : "3px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  color: ${props => (props.propC ? "red" : "blue")};
  border-color: ${props => (props.propD ? "red" : "blue")};
  border-size: ${props => (props.propE ? "2px" : "3px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  color: ${props => (props.propC ? "red" : "blue")};
  border-color: ${props => (props.propD ? "red" : "blue")};
  border-size: ${props => (props.propE ? "2px" : "3px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  color: ${props => (props.propC ? "red" : "blue")};
  border-color: ${props => (props.propD ? "red" : "blue")};
  border-size: ${props => (props.propE ? "2px" : "3px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  color: ${props => (props.propC ? "red" : "blue")};
  border-color: ${props => (props.propD ? "red" : "blue")};
  border-size: ${props => (props.propE ? "2px" : "3px")};
`;

const Box4 = styled.div`
  width: 20px;
  height: 20px;
  margin: 10px;
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  color: ${props => (props.propC ? "red" : "blue")};
  border-color: ${props => (props.propD ? "red" : "blue")};
  border-size: ${props => (props.propE ? "2px" : "3px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  color: ${props => (props.propC ? "red" : "blue")};
  border-color: ${props => (props.propD ? "red" : "blue")};
  border-size: ${props => (props.propE ? "2px" : "3px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  color: ${props => (props.propC ? "red" : "blue")};
  border-color: ${props => (props.propD ? "red" : "blue")};
  border-size: ${props => (props.propE ? "2px" : "3px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  color: ${props => (props.propC ? "red" : "blue")};
  border-color: ${props => (props.propD ? "red" : "blue")};
  border-size: ${props => (props.propE ? "2px" : "3px")};
`;

const Box5 = styled.div`
  width: 20px;
  height: 20px;
  margin: 10px;
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  background-color: ${props => (props.propA ? "red" : "blue")};
  margin: ${props => (props.propB ? "10px" : "12px")};
  color: ${props => (props.propC ? "red" : "blue")};
  border-color: ${props => (props.propD ? "red" : "blue")};
  border-size: ${props => (props.propE ? "2px" : "3px")};
`;

class App extends Component {
  state = {
    showBoxes: false,
    time: 0
  };

  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({
              showBoxes: !this.state.showBoxes,
              clickTime: performance.now()
            });
            setTimeout(() => {
              this.setState({ time: performance.now() - this.state.clickTime });
            }, 0);
          }}
        >
          Toggle boxes ({this.state.time})
        </button>

        {this.state.showBoxes && (
          <>
            {Array.from(Array(6)).map((v, i) => (
              <Box
                key={i}
                propA={i % 2 === 0}
                propB={i % 3 === 0}
                propC={i % 5 === 0}
                propD={i % 7 === 0}
                propE={i % 11 === 0}
              >
                {Array.from(Array(6)).map((v, j) => (
                  <Box2
                    key={j}
                    propA={j % 2 === 0}
                    propB={j % 3 === 0}
                    propC={j % 5 === 0}
                    propD={j % 7 === 0}
                    propE={j % 11 === 0}
                  >
                    {Array.from(Array(6)).map((v, k) => (
                      <Box3
                        key={k}
                        propA={k % 2 === 0}
                        propB={k % 3 === 0}
                        propC={k % 5 === 0}
                        propD={k % 7 === 0}
                        propE={k % 11 === 0}
                      >
                        {Array.from(Array(6)).map((v, l) => (
                          <Box4
                            key={l}
                            propA={l % 2 === 0}
                            propB={l % 3 === 0}
                            propC={l % 5 === 0}
                            propD={l % 7 === 0}
                            propE={l % 11 === 0}
                          >
                            {Array.from(Array(6)).map((v, m) => (
                              <Box5
                                key={m}
                                propA={m % 2 === 0}
                                propB={m % 3 === 0}
                                propC={m % 5 === 0}
                                propD={m % 7 === 0}
                                propE={m % 11 === 0}
                              />
                            ))}
                          </Box4>
                        ))}
                      </Box3>
                    ))}
                  </Box2>
                ))}
              </Box>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default App;
