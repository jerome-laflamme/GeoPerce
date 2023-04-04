<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav id="desktopNav">
    <div class="wrapper">
      <div class="logo">
        <!-- 				<RouterLink to="/">GÉOPERCÉ</RouterLink> -->
        <RouterLink to="/"
          ><img src="../assets/img/VectorizedLogo.png" alt="" class="logoImg"
        /></RouterLink>
      </div>
      <div class="links">
        <RouterLink to="/map">Carte interactive</RouterLink>
        <RouterLink to="/aboutus">A propos</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
    </div>
  </nav>

  <nav role="navigation" id="hamburger">
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <Transition name="scale">
        <ul id="menu">
          <li><a href="#">Carte interactive</a></li>
          <li><a href="#">A propos</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </Transition>
    </div>
  </nav>
</template>

<style scoped>
#hamburger {
  visibility: hidden;
}

.logoImg {
  height: 50px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 80%;
}

#desktopNav {
  transition: 0.5s;
  max-height: 7rem;
}

nav {
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.85);
  color: var(--darkgrey);
  position: fixed;
  width: 100%;
  align-items: center;
  z-index: 1;
  top: 0;
  z-index: 9999;
}

.links {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

#desktopNav a {
  font-family: "Galada", cursive;
  text-decoration: none;
  color: black;
  padding: 1.5rem 2rem;
  transition: 0.5s;
}

#desktopNav a:hover {
  color: var(--red);
  transition: 0.5s;
}

input {
  display: none;
}

/*RESPONSIVE*/

@media screen and (max-width: 1360px) {
  .wrapper {
    width: 90%;
  }
  #desktopNav a {
    font-size: 1rem;
  }
}

@media screen and (max-width: 992px) {
  #desktopNav {
    visibility: hidden !important;
  }

  #hamburger {
    visibility: visible !important;
    height: 87px;
    position: fixed;
    padding-left: 33px;
  }

  #menuToggle {
    display: block;
    position: relative;
    z-index: 1;
  }

  #menuToggle a {
    text-decoration: none;
    color: var(--ivory);
    transition: color 0.3s ease;
  }

  #menuToggle a:hover {
    color: var(--red);
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: var(--dark-grey);
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    transform: rotate(45deg) translate(-2px, -1px);
    color: var(--ivory);
    background-color: var(--ivory) !important;
  }

  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu {
    position: absolute;
    width: 500px;
    height: 500px;
    background: var(--primary);
    list-style-type: none;
    transform: translate(0%, -100%);
    border-radius: 50%;
    top: -200px;
    left: -200px;
    padding-top: 250px;
    padding-left: 220px;
    border: 2px solid var(--ivory);
  }

  #menu li a {
    padding: 10px 0;
    font-size: 22px;
    font-family: "Galada", cursive;
  }

  #menuToggle input:checked ~ ul {
    transform: none;
  }
}

/* SCALE TRANSITION */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
