FROM centos:centos7

RUN curl -sL https://rpm.nodesource.com/setup_16.x | bash -
RUN yum install -y net-tools nodejs 


RUN mkdir /opt/service
COPY . /opt/service
WORKDIR /opt/service/
RUN npm i

CMD ["node", "/opt/service/src/index.js"]
