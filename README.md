# ⚡ mev-blocks-graphql

A GraphQL wrapper for the original https://blocks.flashbots.net/

You can explore the API on [Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fmev-blocks.ernestognw.com%2Fgraphql%2Fv1)

## Development

In order to make the API work, just copy the `env.example` into a `.env` file and fill the variables with your desired information.

The recommended env file is:

```
# Config
NODE_ENV=development
PORT=3000

# Flashbots
MEV_BLOCKS_BASE_URL=https://blocks.flashbots.net/v1
```

Then, just run:

```
yarn dev
```

Runs the application on your preferred port (default 3000)

Go to [http://localhost:3000/graphql/v1](http://localhost:3000/graphql/v1) to use from Apollo Studio

## License 📄

Released under MIT License.
