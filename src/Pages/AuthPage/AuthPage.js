import React, { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import classes from "./AuthPage.module.css";
import * as HomeActions from "../../store/actionTypes/index";
import { useDispatch, useSelector } from "react-redux";

const AuthPage = (props) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const showModalHandler = (show) => {
    setShowModal(show);
  };

  return (
    <>
      <Modal show={showModal}>
        <div className={classes.modal_wrapper}>
          <div className={classes.header_wrapper}>
            <div className={classes.header_innerWrapper}>
              <div className={classes.signup}>Sign Up</div>
              <div
                className={classes.close}
                onClick={() => showModalHandler(false)}
              >
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/TdCEremeWv5.png"
                  alt=""
                />
              </div>
            </div>
            <div className={classes.statement}>Its quick and easy</div>
          </div>
          <div className={classes.form_wrapper}>
            <form>
              <div className={classes.input_wrapper}>
                <input
                  type="text"
                  placeholder="Firstname"
                  className={classes.input_item}
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className={classes.input_item}
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className={classes.input_item}
              />
              <input
                type="password"
                placeholder="New password"
                className={classes.input_item}
              />
              <div className={classes.dateOfBirth_wrapper}>
                <div className={classes.title}>Date of birth</div>
                <div className={classes.dateOfBirth_inner_wrapper}>
                  <select
                    aria-label="Day"
                    name="birthday_day"
                    id="day"
                    title="Day"
                    class="_9407 _5dba _9hk6 _8esg"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14" selected="1">
                      14
                    </option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <select
                    aria-label="Month"
                    name="birthday_month"
                    id="month"
                    title="Month"
                    class="_9407 _5dba _9hk6 _8esg"
                  >
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7" selected="1">
                      Jul
                    </option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>
                  <select
                    aria-label="Year"
                    name="birthday_year"
                    id="year"
                    title="Year"
                    class="_9407 _5dba _9hk6 _8esg"
                  >
                    <option value="2022" selected="1">
                      2022
                    </option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                    <option value="1929">1929</option>
                    <option value="1928">1928</option>
                    <option value="1927">1927</option>
                    <option value="1926">1926</option>
                    <option value="1925">1925</option>
                    <option value="1924">1924</option>
                    <option value="1923">1923</option>
                    <option value="1922">1922</option>
                    <option value="1921">1921</option>
                    <option value="1920">1920</option>
                    <option value="1919">1919</option>
                    <option value="1918">1918</option>
                    <option value="1917">1917</option>
                    <option value="1916">1916</option>
                    <option value="1915">1915</option>
                    <option value="1914">1914</option>
                    <option value="1913">1913</option>
                    <option value="1912">1912</option>
                    <option value="1911">1911</option>
                    <option value="1910">1910</option>
                    <option value="1909">1909</option>
                    <option value="1908">1908</option>
                    <option value="1907">1907</option>
                    <option value="1906">1906</option>
                    <option value="1905">1905</option>
                  </select>
                </div>
              </div>
              <div className={classes.dateOfBirth_wrapper}>
                <div className={classes.title}>Gender</div>
                <div className={classes.dateOfBirth_inner_wrapper}>
                  <span className={classes.gender_input_item}>
                    <label class="_58mt" for="u_2_2_w4">
                      Female
                    </label>
                    <input
                      type="radio"
                      class="_8esa"
                      name="sex"
                      value="1"
                      id="u_2_2_w4"
                      checked
                    />
                  </span>
                  <span className={classes.gender_input_item}>
                    <label class="_58mt" for="u_2_3_bU">
                      Male
                    </label>
                    <input
                      type="radio"
                      class="_8esa"
                      name="sex"
                      value="2"
                      id="u_2_3_bU"
                    />
                  </span>
                  <span className={classes.gender_input_item}>
                    <label class="_58mt" for="u_2_4_n9">
                      Custom
                    </label>
                    <input
                      type="radio"
                      class="_8esa"
                      name="sex"
                      value="-1"
                      id="u_2_4_n9"
                      disabled={true}
                    />
                  </span>
                </div>
              </div>
              <div className={classes.termsOfService}>
                <p className={classes.item_one}>
                  People who use our service may have uploaded your contact
                  information to Facebook.{" "}
                  <span className={classes.links}>Learn more</span>
                </p>
                <p className={classes.item_two}>
                  By clicking Sign Up, you agree to our{" "}
                  <span className={classes.links}>Terms, Data Policy</span> and{" "}
                  <span className={classes.links}>Cookie Policy</span>. You may
                  receive SMS notifications from us and can opt out at any time.
                </p>
              </div>
              <div className={classes.signup_btnWrapper}>
                <button className={classes.signup_btn}>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      <div
        className={[classes.AuthPage, showModal && classes.modal_open].join(
          " "
        )}
      >
        <div className={classes.innerWrapper}>
          <div className={classes.left_wrapper}>
            <div className={classes.text_wrapper}>
              <h1 className={classes.logo}>bookface</h1>
              <h3 className={classes.slogan}>
                Bookface helps you connect and share with the people in your
                life.
              </h3>
            </div>
          </div>
          <div className={classes.right_wrapper}>
            <div className={classes.signIn_input}>
              <form
                onSubmit={(e) =>
                  this.props.onLogin(e, {
                    email: this.state.loginForm.email.value,
                    password: this.state.loginForm.password.value,
                    formIsValid: this.state.formIsValid,
                  })
                }
              >
                <div
                  className={[classes.email_wrapper, classes.input_item].join(
                    " "
                  )}
                >
                  <input
                    type="email"
                    className={classes.email_address}
                    placeholder="Email address"
                  />
                </div>
                <div
                  className={[
                    classes.password_wrapper,
                    classes.input_item,
                  ].join(" ")}
                >
                  <input
                    type="password"
                    className={classes.password}
                    placeholder="Password"
                  />
                </div>
                <button className={classes.LogIn_btn}>Log In</button>
                <div className={classes.fogort_password}>
                  Forgotten password?
                </div>
              </form>
              <div className={classes.createAccount_wrapper}>
                <button
                  className={classes.createAccount_btn}
                  onClick={() => showModalHandler(true)}
                >
                  Create New Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
