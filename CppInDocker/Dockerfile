FROM gcc

RUN apt-get update && \
    apt-get -y full-upgrade 

RUN apt -y install make cmake gdbserver gdb

RUN echo 0 | tee /proc/sys/kernel/yama/ptrace_scope

WORKDIR /app

COPY ./entrypoint.sh /scripts/entrypoint.sh

ENTRYPOINT [ "/scripts/entrypoint.sh" ]
