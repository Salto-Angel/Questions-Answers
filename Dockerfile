FROM node:12.14.0-alpine
# builds image from node 12.14.0 alpine version
RUN mkdir /app
# make a directory of /app within the container
ADD . /app
# adds all things from the current directory to /app in the container
WORKDIR /app
# makes /app the pwd for each subsequent command
RUN npm install
# runs the bash command 
EXPOSE 3000
# opens the port to the host
CMD ["node","app.js"]
# runs executables in format [executable, ...arguments]
