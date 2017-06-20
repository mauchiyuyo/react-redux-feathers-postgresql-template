
## Database

If you're on a Mac, first ensure [PostgreSQL](https://www.postgresql.org/), [Postgis](http://postgis.net/) and [Redis](https://redis.io/) are installed and run the following:
```bash
brew install postgis postgresql redis
brew services start postgresql
brew services start redis
```

## Installation

```bash
npm install
```

## Running Dev Server

```bash
npm run dev
```

## Building and Running Production Server

```bash
npm run build
npm run start
```


Created and maintened by:

– Jonathan Kirknes, [@JonathanKirknes](https://github.com/JonathanKirknes)
