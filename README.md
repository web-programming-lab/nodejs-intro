# Node.js Intro
Mit diesem Repository können Sie die Code- sowie Übungsbeispiele aus dem Node.js Intro lokal ausführen.

Die Ausführungsumgebung ist dabei die [Node.js LTS](https://nodejs.org/).

## Vorbereitung

* Installation [Visual Studio Code](https://code.visualstudio.com/download) (sofern Sie das noch nicht gemacht haben)
* Installation [Node.js](https://nodejs.org/) latest LTS Version (für die Verwendung der Entwicklungswerkzeuge)
* `git clone https://github.com/web-programming-lab/nodejs-intro.git`

## Struktur

Dieses Repository ist wie folgt strukturiert:
* `./examples`: Enthält alle im Unterricht besprochenen Code-Beispiele
* `./exercises`: Enthält alle zu lösenden Übungsvorlagen

## Ausführen
* Snippets oder Übungen: `cd ./[exercise ordner | example ordner] && node [file.js]` 

Achtung: In einzelnen Beispielen oder Übungen müssen Sie zuerst noch `npm install` ausführen.

Sie können anstatt `node` auch [nodemon](https://www.npmjs.com/package/nodemon) verwenden.

## Tooling in diesem Repository

* [nodemon](https://www.npmjs.com/package/nodemon)
* [express](https://www.npmjs.com/package/express)
* [Offizieller MongoDB Client](https://www.npmjs.com/package/mongodb)
* [Jest](https://www.npmjs.com/package/jest)
* [SuperTest](https://www.npmjs.com/package/supertest)

Als managed Cloud MongoDB Server kann [https://cloud.mongodb.com](https://cloud.mongodb.com) verwendet werden (shared, free Instanz).