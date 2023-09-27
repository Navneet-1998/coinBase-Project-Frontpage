import { React, useState } from "react"
import currencyData from "../currencies.json";
import languageData from "../language.json";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillSetting} from "react-icons/ai"
import "./navbar.css"

function Navbar(){
    const [search, setSearch] = useState(false);
    const [sideBar, setSideBar] = useState(false);

    function responsiveSearch() {
        setSearch(true);
      }

  function sideBarShow() {
    if (sideBar) {
      setSideBar(false);
    } else {
      setSideBar(true);
    }
  }
    return (
        <>
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
        </>
    ) 
}


export default Navbar;