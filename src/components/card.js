import {React, useState,useEffect} from "react"
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import Stack from "@mui/material/Stack";
import "./card.css"


const fetchData = async () => {
    try {
      const response = await fetch("https://api.coincap.io/v2/assets");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // Corrected to log data.data
      return data.data;
    } catch (error) {
      console.error("Error fetching data:", error); // Log the error for debugging
    }
  };

  
function CartSection () {
    const [loadmore, setLoadmore] = useState(false);
  const [loader, setLoader] = useState(false);
  const [arrow, setArrow] = useState(true);
  const [coinData, getCoinData] = useState([]);

  function loadMoreHandler() {
    setLoadmore(true);
  }

  function arrowHandler() {
    if (arrow) {
      setArrow(false);
      console.log(coinData) 
      getCoinData(coinData.reverse())
    } else {
      setArrow(true);  
      getCoinData(coinData.reverse())
    }
    
  }

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await fetchData();
      if (data.length > 0) {
        let store = [];
        data.forEach((e, index) => {
          store.push({
            rank: e.rank,
            name: e.name,
            priceUsd: Math.floor(e.priceUsd * 100) / 100,
            marketCapUsd: Math.floor((e.marketCapUsd / 1000000) * 100) / 100,
            vwap24Hr: Math.floor(e.vwap24Hr * 100 * 10) / 1000,
            supply: Math.floor((e.supply / 1000000) * 100) / 100,
            volumeUsd24Hr: Math.floor((e.volumeUsd24Hr / 1000000) * 100) / 100,
            changePercent24Hr: Math.floor(e.changePercent24Hr * 100) / 100,
            symbol: e.symbol,
          });
        });
        getCoinData(store);
        setLoader(true);
      }
    }; 
    fetchPlanets();
  }, [loader]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  function cal(x, y) {
    let n = 0;
    if (y === 1) {
      if (x > 1000) {
        n = Math.floor((x / 1000) * 100) / 100;
        if (n > 1000) {
          n = Math.floor((n / 1000) * 100) / 100;
          return n + "t";
        } else {
          return n + "b";
        }
      } else {
        n = Math.floor(x * 100) / 100;
        return n + "m";
      }
    }
    if (y === 0) {
      if (x > 1000) {
        n = Math.floor((x / 1000) * 100) / 100;
        return n;
      } else {
        n = Math.floor(x * 100) / 100;
        return n;
      }
    }
  }

    return (<>
     <div class="card" id="method">
            <div class="card-body  p-0">
              <Box sx={{ flexGrow: 1 }}>
                <div class="border-bottom border-secondary w-100 ">
                  <Grid
                    container
                    class="d-flex align-items-center text-nowrap  "
                    columns={{ xs: 4, sm: 8, md: 9 }}
                  >
                    <Grid item xs={1} class="fs-6 p-2" style={{ width: "6%" }}>
                      <Item class="dataItems text-center " id="changeSize" onClick={arrowHandler}>Rank { arrow ? <>< AiFillCaretUp/></>  : <>< AiFillCaretDown/> </> }</Item>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      class="fs-6 p-2 "
                      style={{ width: "22.2%" }}
                    >
                      <Item class="dataItems text-start ms-2 " id="changeSize">Name</Item>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      class="fs-6 p-2 "
                      style={{ width: "14.5%" }}
                    >
                      <Item class="dataItems text-end " id="changeSize">Price</Item>
                    </Grid>
                    <Grid item xs={1} class="fs-6 p-2 " style={{ width: "9%" }}>
                      <Item class="dataItems text-end " id="changeSize">Market Cap</Item>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      class="fs-6 p-2 "
                      style={{ width: "14.5%" }}
                    >
                      <Item class="dataItems text-end " id="changeSize">VWAP (24Hr)</Item>
                    </Grid>
                    <Grid item xs={1} class="fs-6 p-2 " style={{ width: "8%" }}>
                      <Item class="dataItems text-end " id="changeSize">Supply</Item>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      class="fs-6 p-2 "
                      style={{ width: "14.5%" }}
                    >
                      <Item class="dataItems text-end " id="changeSize">Volume (24Hr)</Item>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      class="fs-6 p-2 "
                      style={{ width: "11.1%" }}
                    >
                      <Item class="dataItems text-end " id="changeSize">Change (24Hr)</Item>
                    </Grid>
                  </Grid>
                </div>

                {coinData.length > 0 ? (
                  coinData.slice(0, 50).map((e) => (
                    <div class="w-100">
                      <Grid
                        container
                        class="d-flex align-items-center justify-content-center border-bottom text-nowrap container-with-scrollbar scrollable-content"
                        columns={{ xs: 4, sm: 8, md: 9 }}
                      >
                        <Grid
                          item
                          xs={2}
                          class="fs-5 p-2"
                          style={{ width: "6%" }}
                        >
                          <Item class="gridItem  text-center  changeSize2">{e.rank}</Item>
                        </Grid>
                        <Grid
                          item
                          xs={2}
                          class="fs-5 p-2 d-flex flex-row"
                          style={{ width: "22.2%" }}
                        >
                          <img
                            src={`https://assets.coincap.io/assets/icons/${
                              e.symbol ? e.symbol.toLowerCase() : "btc"
                            }@2x.png`}
                            alt={e.name}
                            class="logoImg p-2"
                          />
                          <div>
                            <Item class="gridItem text-start   changeSize2">{e.name}</Item>
                            <Item class="dataItems text-start  fs-6 changeSize2">
                              {e.symbol}
                            </Item>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          class="fs-5 p-2"
                          style={{ width: "14.5%" }}
                        >
                          <Item class="gridItem text-end  changeSize2">${e.priceUsd}</Item>
                        </Grid>
                        <Grid 
                          item
                          xs={1}
                          class="fs-5 p-2"
                          style={{ width: "9%" }}
                        >
                          <Item class="gridItem text-end  changeSize2">
                            ${cal(e.marketCapUsd, 1)}
                          </Item>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          class="fs-5 p-2"
                          style={{ width: "14.5%" }}
                        >
                          <Item class="gridItem text-end  changeSize2">
                            ${cal(e.vwap24Hr, 0)}
                          </Item>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          class="fs-5 p-2"
                          style={{ width: "8%" }}
                        >
                          <Item class="gridItem text-end   changeSize2">
                            {cal(e.supply, 1)}
                          </Item>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          class="fs-5 p-2"
                          style={{ width: "14.5%" }}
                        >
                          <Item class="gridItem text-end  changeSize2">
                            ${cal(e.volumeUsd24Hr, 1)}
                          </Item>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          class="fs-5 p-2"
                          style={{ width: "11.1%" }}
                        >
                          <Item
                            class="text-end  changeSize2"
                            style={{
                              color: e.changePercent24Hr >= 0 ? "green" : "red",
                            }}
                          >
                            {e.changePercent24Hr}%
                          </Item>
                        </Grid>
                      </Grid>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </Box>
              {loadmore ? (
                coinData
                  .slice(50) // Get elements starting from index 50
                  .map((e) => (
                    <div class="w-100">
                      <Grid
                        container
                        class="d-flex align-items-center justify-content-center border-bottom text-nowrap container-with-scrollbar scrollable-content"
                        columns={{ xs: 4, sm: 8, md: 9 }}
                      >
                        <Grid
                          item
                          xs={2}
                          class="fs-5 p-2"
                          style={{ width: "6%" }}
                        >
                          <Item class="gridItem text-center ">{e.rank}</Item>
                        </Grid>
                        <Grid
                          item
                          xs={2}
                          class="fs-5 p-2 d-flex flex-row"
                          style={{ width: "22.2%" }}
                        >
                          <img
                            src={`https://assets.coincap.io/assets/icons/${
                              e.symbol ? e.symbol.toLowerCase() : "btc"
                            }@2x.png`}
                            alt={e.name}
                            class="logoImg p-2"
                          />
                          <div>
                            <Item class="gridItem text-start  ">{e.name}</Item>
                            <Item class="dataItems text-start  fs-6">
                              {e.symbol}
                            </Item>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          class="fs-5 p-2"
                          style={{ width: "14.5%" }}
                        >
                          <Item class="gridItem text-end ">${e.priceUsd}</Item>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          class="fs-5 p-2"
                          style={{ width: "9%" }}
                        >
                          <Item class="gridItem text-end ">
                            ${cal(e.marketCapUsd, 1)}
                          </Item>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          class="fs-5 p-2"
                          style={{ width: "14.5%" }}
                        >
                          <Item class="gridItem text-end ">
                            ${cal(e.vwap24Hr, 0)}
                          </Item>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          class="fs-5 p-2"
                          style={{ width: "8%" }}
                        >
                          <Item class="gridItem text-end  ">
                            {cal(e.supply, 1)}
                          </Item>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          class="fs-5 p-2"
                          style={{ width: "14.5%" }}
                        >
                          <Item class="gridItem text-end ">
                            ${cal(e.volumeUsd24Hr, 1)}
                          </Item>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          class="fs-5 p-2"
                          style={{ width: "11.1%" }}
                        >
                          <Item
                            class="text-end"
                            style={{
                              color: e.changePercent24Hr >= 0 ? "green" : "red",
                            }}
                          >
                            {e.changePercent24Hr}%
                          </Item>
                        </Grid>
                      </Grid>
                    </div>
                  ))
              ) : (
                <></>
              )}
            </div>
          </div>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {loader ? (
              <Button
                variant="contained"
                justifyContent="center"
                onClick={loadMoreHandler}
                class="bg-primary mt-3"
                className={loadmore ? "hidden" : ""}
              >
                {" "}
                Load more{" "}
              </Button>
            ) : (
              <h5 class="loading m-3">Loading data...</h5>
            )}
          </Stack></>)
}

export default CartSection ;
