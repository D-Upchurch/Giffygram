/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

//Get a reference to the location on the DOM where the app will display

import { getUsers, getPosts, usePostCollection } from './data/DataManager.js'
import { PostList } from './feed/PostList.js'
import { NavBar } from './nav/NavBar.js'
import { Footer } from './nav/Footer.js'

const postElement = document.querySelector(".postList");

const showPostList = () => {
      getPosts().then((allPosts) => {
          postElement.innerHTML = PostList(allPosts);
      })
};


const showFilteredPosts = (year) => {
    //get a copy of the post collection
    const epoch = Date.parse(`01/01/${year}`);
    //filter the data
    const filteredData = usePostCollection().filter(singlePost => {
      if (singlePost.timestamp >= epoch) {
        return singlePost
      }
    })
    postElement.innerHTML = PostList(filteredData);
  }


/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/
const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
  
      console.log(`User wants to see posts since ${yearAsNumber}`)
      //invoke a filter function passing the year as an argument
      showFilteredPosts(yearAsNumber);
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
