# REACT.js Web Portfolio

This is a My Portfolio sourcecode developed using React.js.

## Maintenance

This website is written in Javascript using React.JS library. To work and maintain this website, the developer must have substantial knowledge on TailwindCSS (CSS library) for styling and three.js (a 3D web framework).

 <table>
    <tr>
      <th>Package Name</th>
      <th>Use In App</th>
    </tr>
    <tr>
      <td>tailwindcss</td>
      <td>styling library for ease in maintenance</td>
    </tr>
    <tr>
      <td>three</td>
      <td>framework for 3D interactivity and animation</td>
    </tr>
    <tr>
      <td>framer-motion</td>
      <td>page transition and div animation library</td>
    </tr>
    <tr>
      <td>firebase</td>
      <td>web health and analytics</td>
    </tr>
</table>

#### How to build a docker image from the source code and run the app

##### follow the data in the table below provided you are in the same directory as the Dockerfile

 <table>
    <tr>
      <th>Task</th>
      <th>Docker command</th>
    </tr>
    <!-- <tr>
      <td>Build a docker image manually without docker compose</td>
      <td>docker build -t my-portfolio-app .</td>
    </tr> -->
    <!-- <tr>
      <td>Run the image locally manually</td>
      <td>docker run -p 3000:3000 my-portfolio-app</td>
    </tr> -->
    <tr>
      <td>Build a docker image using docker compose</td>
      <td>docker-compose build</td>
    </tr>
    <tr>
      <td>Run the image locally</td>
      <td>docker run -d -p 80:80 --name portfolio-prod portfolio-prod:v1.1.0</td>
    </tr>
    <tr>
      <td>tag Docker image</td>
      <td>docker tag portfolio-prod:v1.1.0 adewaleda/portfolio:v1.1.0</td>
    </tr>
    <tr>
      <td>push to remote repository</td>
      <td>docker push adewaleda/portfolio:v1.1.0</td>
    </tr>
    <tr>
      <td>Pull image from DockerHub on server</td>
      <td>sudo docker pull adewaleda/portfolio:v1.1.0</td>
    </tr>
    <tr>
      <td>stop current running docker image</td>
      <td>sudo docker stop *Container ID*</td>
    </tr>
    <tr>
      <td>initiate pulled docker image on server</td>
      <td>sudo docker run -d -p 8081:80 --name portfolio-prod-v1.1.0 *Image ID*</td>
    </tr>
    </table>

## How to start the react application

step 1:
run **npm install** (to install all the dependencies)

step 2:
run **npm start** (start the application on port :3000)

> <a href="https://www.adewaleda.com/" target="_blank">Visit</a>
