import React, { useEffect } from "react";
import "./modal.css";
import logoImg from "../../../../../../Assets/XCCESSCOM TRANS2.png";
const Login = (props) => {
  useEffect(() => {
    // Get the modal
    var modal = document.getElementById("myModalLogin");

    // Get the button that opens the modal
    var btn = document.getElementById("login");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("spanClose")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }, []);
  useEffect(() => {
    window.addEventListener("click", function closeModal(event) {
      var modal = document.getElementById("myModalLogin");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  const closeHandler = () => {
    var modal = document.getElementById("myModalLogin");
    modal.style.display = "none";
  };
  const moveToRegisterHandler = () => {
    var modalHide = document.getElementById("myModalLogin");
    modalHide.style.display = "none";
    var modal = document.getElementById("myModalRegister");
    modal.style.display = "block";
  };
  return (
    <div id="myModalLogin" class="modal">
      <section id="content">
        <div class="modal-header">
          <span onClick={closeHandler} class="close spanClose">
            &times;
          </span>
        </div>
        <div class="xccess-logo">
          <img src={logoImg} width="100px" alt="" />
        </div>
        <form action="">
          <h1>Login</h1>
          <div>
            <input
              type="text"
              placeholder="Username"
              required=""
              id="username"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required=""
              id="password"
            />
          </div>
          <div>
            <input type="submit" value="Log in" />
            <span className="spanLinkStyles" href="#">
              Lost your password?
            </span>
            <span
              className="spanLinkStyles"
              onClick={moveToRegisterHandler}
              href="#"
            >
              {" "}
              Register
            </span>
          </div>
        </form>
      </section>

      {/* <div class="modal-footer">
                    <h3>Modal Footer</h3>
                </div> */}
    </div>
  );
};

export default Login;
