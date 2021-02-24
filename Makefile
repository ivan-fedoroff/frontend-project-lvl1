install: # установка зависимостей
		npm install

brain-games: # запуск brain-games
		node bin/brain-games.js

publish: # публикация пакета
		npm publish --dry-run