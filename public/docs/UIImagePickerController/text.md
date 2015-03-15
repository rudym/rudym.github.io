[UIImagePickerController](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImagePickerController_Class/index.html)
---------------------
The simplest way to find a media file in your device. This controller can locate it, preview and play it.

Big downgrade is that this controller have issues with landscape layout. You can't even start with your application portrait mode unchecked. It is obligatory to check *modal* and *popover* usage here.

>##### *where did I take media types from? - [ref](https://developer.apple.com/library/ios/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_conc/understand_utis_conc.html)