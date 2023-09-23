import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        background-color: azure;
        font-family: Segoe UI;
    }


    button{
        background-color: blue;
        color:white;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    input [type = "text"]{
        border-radius: 5px;

    }



`
export const Container=styled.main`
    box-shadow: 0 0 10px gray;
    max-width: 650px;
    margin: 0 auto;
    border-radius:  10px;
    padding: 30px;
    background-color: white;


`