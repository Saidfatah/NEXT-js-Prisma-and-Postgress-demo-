import prismaClient from '../../lib/prisma'
export default async function  handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        console.log(req.body)
        const savedPost =await prismaClient.post.create({
            data:{
                ...JSON.parse(req.body)
            }
        })

        res.send(savedPost)
      } else {
        // Handle any other HTTP method
        res.send("we don't do that here ")
      }
}