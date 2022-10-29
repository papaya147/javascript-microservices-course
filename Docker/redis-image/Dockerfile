# use and existing docker image as base
FROM alpine

# download and install dependency
RUN apk add --update redis

# tell image what to do when started as a container
CMD ["redis-server"]