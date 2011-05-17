BrazilJS - Realtime Applications with Node.JS
=============================================

Códigos apresentados no BrazilJS.

Precisa instalar os pacotes. Para isso execute npm install dentro do diretório.

01 - Chunked
------------
Aplicação mostrando o básico de uma resposta em pedaços. 
Para rodar:
    node chunked.js
    http://localhost:8000

02 - log
------------
Mostra como fazer stream de um log usando Socket.IO
Para rodar:
    nohup app.js &
    node log.js
    Acesse http://localhost:8001/log.html

    Acesse diversas URLs para ver o log:
    curl http://localhost:8000
    curl http://localhost:8000/teste
    curl http://localhost:8000/xpto

03 - Audio/Vídeo
-----------------
Transmite audio/vídeo por http com seek. Implementação incompleta. Apenas para teste.
Para rodar:
    node audio.js
    http://localhost:2000

    node video.js
    http://localhost:2000
