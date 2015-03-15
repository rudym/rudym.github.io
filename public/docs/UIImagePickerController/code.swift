let mycontroller = UIImagePickerController()
mycontroller.mediaTypes = ["public.movie", "public.image"]

self.presentViewController(mycontroller, animated: true,
	completion: nil)