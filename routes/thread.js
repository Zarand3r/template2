var express           = require('express'),
    ThreadController   = express.Router();

//controller functions to be used below in route handling
// Forum feature, like a thread

ThreadController.route('/')
  .get() //view the questions main page, with featured and popular threads, sorted by topic
  .post() //
  .delete();

//the code below ensures that /thread/12415 redirects to /thread/12415/how-to-route-with-node and that they both route to the same page
ThreadController.route('/:thread/:ttitle?') // :thread is a unique id
  .get(function(req, res) { //view a thread
    // var ttitle = get ttitle value associated with :thread from the database
    if (req.params.ttitle !== ttitle) {
      redirect('/'+thread+ttitle)
    }
    else {
      //get and display info about the thread with the id :thread
    }
  })
  .post() //edit thread question
  .delete(); //delete a thread

ThreadController.route('/:newthread')
  .get() //displays a form
  .post() //create new thread (form posts input data to this url, as objects in req.body)

ThreadController.route('/:thread/:ttitle/comment') //post a comment and assigns each comment an id. The url of that comment is /:thread/id
  .get()
  .post() //edit comment

ThreadController.route('/:thread/:ttitle/newcomment')
  .get() //displays form
  .post() //adds a comment to the commends object stored in the thread's database file


  module.exports = ThreadController;
