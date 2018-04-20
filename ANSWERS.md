<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    Middleware are functions that are invoked by the express.js routing layer before a final request handler is. They come in between a raw request and the final intended route.
    Sessions consists of a place where data is stored that you want access to across requests. There's a session per user and user data is stored and accessed as they browse the app.
    Bcrypt is a password hashing function. It implements a salt that can be adjusted to increase the complexity and time it takes to hash a function which can help to project from rainbow-table attacks.
    JWT are containers in the form of JSON that work across different programming languages, are self-contained and are easily passed around.

2.  What does bcrypt do in order to prevent attacks?
    Bcrypt hashes passwords and stores those hashed passwords in a server's database for future user login reference

3.  What are the three parts of the JSON Web Token?
    A JSON web token consists of a header payload and signature.
