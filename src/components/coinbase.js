import { useState, useEffect } from "react";
import React from "react";
import "./coinbase.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillSetting, AiFillCaretUp, AiFillCaretDown } from "react-icons/ai"
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import currencyData from "../currencies.json";
import languageData from "../language.json";

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

function Coinbase() {
  const [search, setSearch] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [loadmore, setLoadmore] = useState(false);
  const [loader, setLoader] = useState(false);
  const [arrow, setArrow] = useState(true);
  const [coinData, getCoinData] = useState([]);

  function responsiveSearch() {
    setSearch(true);
  }
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

  }, []);

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

  function sideBarShow() {
    if (sideBar) {
      setSideBar(false);
    } else {
      setSideBar(true);
    }
  }
  return (
    <body class="mh-100">
      <nav
        className="navbar navbar-expand-md mw-100 overflow-visible "
        style={{ backgroundColor: "rgb(255, 255, 255)" }}
      >
        <div className="d-flex  justify-content-around w-100">
          <div class="d-flex justify-content-evenly responseMe">
            {sideBar ? (
              <>
                {" "}
                <div
                  class="offcanvas offcanvas-start show w-50"
                  tabindex="-1"
                  id="offcanvas"
                  aria-labelledby="offcanvasLabel"
                >
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasLabel">
                      Menu
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      onClick={sideBarShow}
                    ></button>
                  </div>
                  <div class="offcanvas-body">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link thick"
                          aria-current="page"
                          href="###"
                        >
                          <b>Home</b>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link thick" href="###">
                          <b>Features</b>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link thick" href="###">
                          <b>Pricing</b>
                        </a>
                      </li>
                    </ul>
                    <hr></hr>
                    <div class="nav-item dropdown my-3">
                      <a
                        class="nav-link dropdown-toggle gridItem thick"
                        href="###"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ fontWeight: "500" }}
                      >
                        USD
                      </a>
                      <ul
                  class="dropdown-menu overflow-scroll w-100"
                  style={{ height: "300px" }}
                >
                  {currencyData.map((currency) => (
                    <li
                      class="m-2 border-bottom currencies"
                      style={{ cursor: "pointer" }}
                    >
                      {currency.name} ({currency.code})
                    </li>
                  ))}
                </ul>
                    </div>
                    <div class="nav-item dropdown my-3">
                      <a
                        class="nav-link dropdown-toggle gridItem"
                        href="###"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        English
                      </a>
                      <ul
                  class="dropdown-menu overflow-scroll w-100"
                  style={{ height: "300px" }}
                >
                  {languageData.map((language) => (
                    <li
                      class="m-2 border-bottom currencies"
                      style={{ cursor: "pointer" }}
                    >
                      {language.name} ({language.code})
                    </li>
                  ))}
                </ul>
                    </div>
                  </div>
                </div>{" "}
              </>
            ) : (
              <>
                {" "}
                <a className="navbar-brand" href="###">
                  <p></p>
                </a>
                <button
                  className="navbar-toggler overflow-visible"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={sideBarShow}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link thick"
                        aria-current="page"
                        href="###"
                      >
                        <b>Home</b>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link thick" href="###">
                        <b>Features</b>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link thick" href="###">
                        <b>Pricing</b>
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
          <div>
            {/* Use process.env.PUBLIC_URL to reference images in the public directory */}
            <img
              src="https://coincap.io/static/logos/black.svg"
              style={{ height: "45px" }}
              alt="coincap logo"
            />
          </div>
          <div class="d-flex justify-content-evenly responseYou ">
            <ul class="navbar-nav me-auto mb-2 ">
              <li class="nav-item dropdown mx-2 hiddening ">
                <a
                  class="nav-link dropdown-toggle"
                  href="###"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  USD
                </a>
                <ul
                  class="dropdown-menu overflow-scroll w-100"
                  style={{ height: "200px" }}
                >
                  {currencyData.map((currency) => (
                    <li
                      class="m-2 border-bottom currencies"
                      style={{ cursor: "pointer" }}
                    >
                      {currency.name} ({currency.code})
                    </li>
                  ))}
                </ul>
              </li>
              <li class="nav-item dropdown mx-3 hiddening  overflow-visible">
                <a
                  class="nav-link dropdown-toggle"
                  href="###"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </a>
                <ul
                  class="dropdown-menu overflow-scroll w-100"
                  style={{ height: "200px" }}
                >
                  {languageData.map((language) => (
                    <li
                      class="m-2 border-bottom currencies"
                      style={{ cursor: "pointer" }}
                    >
                      {language.name} ({language.code})
                    </li>
                  ))}
                </ul>
              </li>
            
            </ul>
            <div>
              {search ? (
                <>
                  <div>
                    <label for="exampleFormControlInput1" class="form-label">
                      <input
                        type="email"
                        class="form-control inputWidth clean"
                        id="exampleFormControlInput1"
                        placeholder="Enter the coin name..."
                      />
                    </label>
                  </div>
                </>
              ) : (
                <>
                  <div class="search mx-2" style={{fontSize:"25px"}} onClick={responsiveSearch}>
                    <BiSearchAlt2 />
                  </div>
                </>
              )}
            </div>
            <div class="setting hiddening">
                <AiFillSetting />
            </div>
          </div>
        </div>
      </nav>

      <div>
        <div class="gradingBackground">
          <div class="d-flex justify-content-center container-with-scrollbar scrollable-content">
            <div class="row m-3 textSizing">
              <div class="col-lg-4 col-sm-12 textChange text-center">
                <p class="m-0">MARKET CAP</p>
                <p class="fontSize">$1.05T</p>
              </div>
              <div class="col-lg-4 col-sm-12 textChange text-center">
                <p class="m-0">EXCHANGE VOL</p>
                <p class="fontSize">$15.37B</p>
              </div>
              <div class="col-lg-4 col-sm-12 textChange text-center">
                <p class="m-0">ASSETS</p>
                <p class="fontSize">2,296</p>
              </div>
            </div>

            <div class=" row m-3 textSizing">
              <div class="col-lg-4 col-sm-12 textChange text-center">
                <p class="m-0">EXCHANGES</p>
                <p class="fontSize">73</p>
              </div>
              <div class="col-lg-4 col-sm-12 textChange text-center">
                <p class="m-0">MARKETS</p>
                <p class="fontSize">9,652</p>
              </div>
              <div class="col-lg-4 col-sm-12 textChange text-center">
                <p class="m-0">BTC DOM INDEX</p>
                <p class="fontSize">49.0%</p>
              </div>
            </div>
          </div>

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
          </Stack>

          <footer
            class=" w-100"
            className={
              loader
                ? "mt-4"
                : "position-relative position-absolute bottom-0 end-0 m-0 p-0 w-100 h-auto container-with-scrollbar scrollable-content"
            }
          >
            <div class="gradingBackgroundnew mw-100">
              <div class="container text-center">
                <div class="row mx-3 ">
                  <div class="col-3 ">
                    <div class="p-3 text-start mt-3">
                      <p class="listFont">COINCAP.IO</p>
                      <ul class="list-unstyled listing">
                        <li class="listinghover m-1">Methodology</li>
                        <li class="listinghover m-1">Support</li>
                        <li class="listinghover m-1">Our API</li>
                        <li class="listinghover m-1">Rate Comparison</li>
                        <li class="listinghover m-1">Careers</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="p-3 text-start mt-3">
                      <p class="listFont">LEGALS</p>
                      <ul class="list-unstyled listing">
                        <li class="listinghover m-1">Methodology</li>
                        <li class="listinghover m-1">Support</li>
                      </ul>
                      <p class="listFont">DISCLAIMER</p>
                      <ul class="list-unstyled listing">
                        <li
                          class="listinghover text-wrap"
                          style={{ width: "150%" }}
                        >
                          Neither ShapeShift AG nor CoinCap are in any way
                          associated with CoinMarketCap, LLC or any of its goods
                          and services.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="p-3 text-start mt-3">
                      <p class="listFont">FOLLOW US</p>
                      <ul class="list-unstyled listing d-flex flex-md-row flex-column">
                        <li class="me-2">
                          <a aria-current="page" href="###">
                            <b
                              class="listinghover listing fa fa-twitter"
                              style={{ fontSize: "24px" }}
                            ></b>
                          </a>
                        </li>
                        <li>
                          <a href="###">
                            <b
                              class="listinghover listing fa fa-facebook-official"
                              style={{ fontSize: "24px" }}
                            ></b>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="p-3 text-start mt-3">
                      <p class="listFont">COINCAP APP AVAILABLE ON</p>
                      <ul class="list-unstyled listing">
                        <li>
                          <a aria-current="page" href="###">
                            <img
                              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                              style={{ width: "160px" }}
                              alt="playstore logo"
                              class="imging"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="###" class="d-flex justify-content-start">
                            <img
                              src="https://w7.pngwing.com/pngs/440/692/png-transparent-app-store-apple-logo-apple-text-logo-microsoft-store-thumbnail.png"
                              style={{
                                width: "140px",
                                borderRadius: "6px",
                                marginLeft: "10px",
                              }}
                              alt="app store logo"
                              class="imging"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </body>
  );
}

export default Coinbase;

//
