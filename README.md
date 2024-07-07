## Setup locally

1. Clone the repository
1. Run `yarn install`
1. Create a `.env` file in the root of the project and add environment variables mentioned below
1. Run server by using: `yarn dev`

### Environment Variables

You can also take reference from `.env.example` file

1. `PORT` - Port on which server will run
1. `MONGO_URI` - MongoDB connection string

### Important points

1. We are using `ejs` as our template engine so you can't use `.html` you have to use `.ejs` extension
1. All the views are in `views` folder
1. All static files such as css, js, images are in `public` folder. To use them in your views you can use `/public/your-file-path`
