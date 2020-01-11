FROM node

RUN echo "deb http://ftp.uk.debian.org/debian jessie-backports main" >> /etc/apt/sources.list
RUN apt-get update
RUN apt-get -y install ffmpeg

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ADD ./src /usr/src/app

CMD node index.js
