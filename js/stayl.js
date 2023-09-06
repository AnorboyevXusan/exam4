* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 20px;
  padding-right: 20px;
}

header {
  position: fixed;
  width: 100%;
  background: red;
  padding: 30px 0;
  transition: 0.5s;
}

.navbar-shrink {
  padding: 20px 0;
}

nav {
  display: flex;
  justify-content: space-between;
}

.menu {
  display: flex;
  gap: 20px;
}

nav a {
  color: white;
}

nav button {
  display: none;
}

.login {
  display: block;
}

main {
  padding-top: 80px;
}

.login-form input {
  width: 100%;
  margin-bottom: 20px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  z-index: -1;
  transition: 0.5s;
}

.modal-show {
  opacity: 1;
  z-index: 1;
}

.modal-content {
  top: -100vh;
  position: relative;
  max-width: 500px;
  padding: 50px;
  background-color: red;
  transition: 0.5s;
}

.modal-content-show {
  top: 0;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
}

@media (max-width: 600px) {
  nav button {
    display: block;
  }
  .menu {
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: -50%;
    height: 100vh;
    width: 50%;
    background-color: green;
    transition: 0.5s;
  }
}

.menu-show {
  left: 0;
}
