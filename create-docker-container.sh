#!/bin/sh

docker stop homeincweb
docker rm homeincweb
docker run -d -p 3000:3000 --name homeincweb geojabs/homeincweb
docker logs -f homeincweb