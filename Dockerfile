
FROM rasa/rasa:3.1.2-full

WORKDIR /app

COPY . /app

RUN rasa train

CMD ["run", "--enable-api", "--cors", "*", "--debug"]
