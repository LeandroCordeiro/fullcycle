FROM golang:1.15-alpine AS builder

COPY main.go .

RUN GOOS=linux go build -o /app/hello -ldflags='-s -w' .

FROM scratch
COPY --from=builder /app/hello /app/hello

CMD ["/app/hello"]
