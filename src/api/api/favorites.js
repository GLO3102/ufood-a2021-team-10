import { endpoint } from "../store/url.js";
import {testToken} from "./restaurants.js";

// create a list of favorite restaurants
export const createListFavorites = async (listName) => {

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Cookie", "connect.sid=s%3A75zFyvTZRk7rQ_juDpjNfzmZvkZbe2pe.xaSZI%2BUpGP6nYVCbxbTqoTf%2B6EpxHIFaF%2BKs0VATF3Q");

myHeaders, url = testToken(myHeaders);
let urlencoded = new URLSearchParams();
urlencoded.append("name", listName);
urlencoded.append("owner", this.$store.state.userInfo.email);
urlencoded.append("", "");

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

const request = new Request(`${url}/favorites`, requestOptions)
    const response = await fetch(request);
    await response.json();
}

// get all list of restaurants favorite of the user
export const getListFavorites = async () => {
    myHeaders, url = testToken(new Headers());
    const request = new Request(
        `${url}/users/${this.$store.state.userInfo.id}/favorites`,
        {
            method: "GET",
           
            headers: myHeaders,
            params:{
                limit:"30"
            }
        }
    );

    const response = await fetch(request);
    return (await response.json());
};


export const updateListFavorites = async ({owner, id, name}) => {
    myHeaders, url = testToken(new Headers());
    const request = new Request(
        `${url}/favorites/${id}`,
        {
            method: "PUT",
            headers: myHeaders,
            body:JSON.stringify({
                name: name
            }),
            params: {
                owner: owner, 
                name: name
            }
        }
    );
    const response = await fetch(request);
    return await response.json();
};

export const deleteListFavorites = async (id) => {
    myHeaders, url = testToken(new Headers());
    const request = new Request(
        `${url}/favorites/${id}`,
        {
            method: "DELETE",

            headers: myHeaders,
        }
    )
    const response = await fetch(request);
    await response.json();
};

export const viewListFavorites = async (id) => {
    myHeaders, url = testToken(new Headers());
    const request = new Request(
        `${url}/favorites/${id}`,
        {
            method: "GET",

            headers: myHeaders,
        }
    )
    const response = await fetch(request);
    return await response.json();
};

export const addRestaurantToList = async (listId, restaurantId) => {
    myHeaders, url = testToken(new Headers());
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Cookie", "connect.sid=s%3A75zFyvTZRk7rQ_juDpjNfzmZvkZbe2pe.xaSZI%2BUpGP6nYVCbxbTqoTf%2B6EpxHIFaF%2BKs0VATF3Q");

let urlencoded = new URLSearchParams();
urlencoded.append("id", restaurantId);

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};
    const request = new Request(
        `${endpoint}/favorites/${listId}/restaurants`,
        requestOptions
    );

    const response = await fetch(request);
    return await response.json();
};

export const deleteRestaurantFromList = async (restaurantId, Listid) => {
    
    myHeaders, url = testToken(new Headers());
    const request = new Request(
        `${url}/favorites/${Listid}/restaurants/${restaurantId}`,
        {
            method: "DELETE",

            headers: myHeaders,
        }
    );

    const response = await fetch(request);
};
