/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

//Get a reference to the location on the DOM where the app will display

import { getUsers, getPosts } from './data/DataManager.js'
import { PostList } from './feed/PostList.js'
import { NavBar } from './nav/NavBar.js'
import { Footer } from './nav/Footer.js'

const showPostList = () => {
    const postElement = document.querySelector(".postList");
      getPosts().then((allPosts) => {
          postElement.innerHTML = PostList(allPosts);
      })
};

/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/
const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
  
      console.log(`User wants to see posts since ${yearAsNumber}`)
    }
  })

applicationElement.addEventListener("click", event => {
	if (event.target.id === "logout"){
		console.log("You clicked on logout")
	}
})

applicationElement.addEventListener("click", event => {
    if (event.target.id === "homeIcon"){
        console.log("You clicked on the home button")
    }
})

applicationElement.addEventListener("click", event => {
    if (event.target.id === "directMessageIcon"){
        console.log("You clicked on the direct message button")
    }
})

const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}

const showFooter = () => {
    const footerElement = document.querySelector("footer")
    footerElement.innerHTML = Footer();
}

const startGiffyGram = () => {
    showPostList();
    showNavBar();
    showFooter();
}

// Are you defining the function here or invoking it?
startGiffyGram();
