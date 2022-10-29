# use and existing docker image as base
FROM alpine

# download and install dependency
RUN apk add --update redis
RUN apk add --update gcc

# tell image what to do when started as a container
CMD ["redis-server"]