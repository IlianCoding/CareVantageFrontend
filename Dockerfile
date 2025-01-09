FROM ubuntu:latest
LABEL authors="ilian"

ENTRYPOINT ["top", "-b"]