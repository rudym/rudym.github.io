let image = UIImage()

let mycontroller = UIActivityViewController(
	activityItems: [image], applicationActivities: nil)

self.presentViewController(mycontroller, animated: true,
	completion: nil)