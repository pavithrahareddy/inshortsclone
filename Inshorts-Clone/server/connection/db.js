import mongoose from 'mongoose'

const Connection = async (username, password) => {
  try {
    const URL = `mongodb://${username}:${password}@muggle-inshorts-shard-00-00.ojmqr.mongodb.net:27017,muggle-inshorts-shard-00-01.ojmqr.mongodb.net:27017,muggle-inshorts-shard-00-02.ojmqr.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-i3l2yq-shard-0&authSource=admin&retryWrites=true&w=majority`

    await mongoose.connect(URL, { useNewUrlParser: true })

    console.log('Database connected successfully')
  } catch (error) {
    console.log('Error while connecting with the database ', error)
  }
}

export default Connection
