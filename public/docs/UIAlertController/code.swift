let nextController = UIAlertController(title: "The Title",
    message: "The message",
    preferredStyle: UIAlertControllerStyle.ActionSheet)

let alertAction = UIAlertAction(title: "Ok",
	style: UIAlertActionStyle.Default) {
    action in self.dismissViewControllerAnimated(true, 
    	completion: nil)
}

nextController.addAction(alertAction)

self.presentViewController(nextController, animated: true,
	completion: nil)