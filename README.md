# Spacestagram
_Shopify Challenge for Summer 2022 Frontend Internship. [Spacestagram](https://spacestagram.surge.sh/)_


## Table of Contents
  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Code Architecture](#code-architecture)
  - [Illustrations](#illustrations)
  - [Install + Setup](#set-up)
  - [Features](#features)
  - [Contributors](#contributors)
  - [Project Specs](#project-specs)

## Abstract
	
This application was built for the Shopify Front End Developer Intern Challenge. This application uses the data from the NASA's APIs. Each photo displays a descriptive data of title, description and the date it was captured. The user is able to like and unlike each photo. 
  

## Technologies
<p align="left">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="html5"/>
  <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img alt="Cypress" src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e"/>
  <img alt="Visual Studio" src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white"/>  
  <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
</p>


## Code Architecture

  - __src__
     - __App__
       - [App.css](src/components/App/App.css)
       - [App.tsx](src/components/App/App.tsx)
     - __SpaceCardContainer__
       - [SpaceCardContainer.css](src/componentsSpaceCardContainer/SpaceCardContainer.css)
       - [SpaceCardContainer.tsx](src/components/SpaceCardContainer/SpaceCardContainer.tsx)
     - __SpaceCard__
       - [SpaceCard.css](src/components/SpaceCard/SpaceCard.css)
       - [SpaceCard.tsx](src/components/SpaceCard/SpaceCard.tsx)
     - __Loader__
       - [Loading.css](src/components/Loading/Loading.css)
       - [Loading.tsx](src/components/Loading/Loading.tsx)
     - [index.css](src/index.css)
     - [index.tsx](src/index.tsx)
     - __util__
       - [ApiCalls.js](src/components/Util/ApiCalls.tsx)

## Illustrations

<img width="1299" alt="Spacestagram - Desktop View" src="https://user-images.githubusercontent.com/78002374/150081547-b34afd5a-70b4-4832-9ae2-f9c1395be583.png">

<img width="497" alt="Spacestagram - Mobile View" src="https://user-images.githubusercontent.com/78002374/150081609-0d4e1cd9-958c-4e45-a0b5-0991270f5c04.png">

<img width="504" alt="Spacestagram - Accessibility Test" src="https://user-images.githubusercontent.com/78002374/150081629-7f37bf99-641f-4e65-b092-56960c0dffb8.png">



## Install + Setup

- Clone down the Repository
- cd into repository
- run `npm install`
- run `npm start`

## Features

- Desktop, Ipad and Mobile View
- User can like or unlike an image
- Loading Screen shows as site is fetching data
- 100% accessibility report on Lighthouse

## Contributors
  - [Andrey Bermudez](https://github.com/Andrey-1992)


## Project Specs
  - The project spec can be found [here](https://docs.google.com/document/d/13zXpyrC2yGxoLXKktxw2VJG2Jw8SdUfliLM-bYQLjqE/edit#heading=h.l4jllv59h2hm)

