'use strict'
const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)

document.getElementById('open-login').addEventListener('click', moveOverlay)

const formulario = document.querySelector("form")
const Inome = document.querySelector(".nome")
const Iemail = document.querySelector(".email")
const Isenha = document.querySelector(".senha")


