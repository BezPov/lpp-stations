Building the Docker image: 

`docker image build -t lpp-stations:1.0.0 .`

Running the Docker image:

`docker container run --publish 8092:8092 --detach --name lpp-stations lpp-stations:1.0.0`

Removing the Docker image:

`docker container remove --force lpp-stations`