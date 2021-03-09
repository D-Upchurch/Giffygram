export const getUsers = () => {

    return fetch("http://localhost:8088/users")
    .then(response => response.json());
};

export const getPosts = () => {

    return fetch("http://localhost:8088/posts")
    .then(response => response.json());
};

const loggedInUser = {
	id: 1,
	name: "Bryan",
	email: "bryan@bn.com"
}

export const getLoggedInUser = () => {
	return loggedInUser;
}

// export const post = (postObj) => {
// 	return fetch("http://localhost:8088/posts", {
//         method: "POST",
// 		headers: {
// 			"Content-Type": "application/json"
// 		},
// 		body: JSON.stringify(postObj)
//     })
//     .then(response => response.json())
//     .then(parsedResponse => {
//         // do something with response here
//         return parsedResponse;
//     })
// }
