copy files\press-release.pdf prod\files\press-release.pdf
copy files\bowenwork-brochure.pdf prod\files\bowenwork-brochure.pdf

copy images\main-image-mobile.jpg prod\images\main-image-mobile.jpg
copy images\main-image.jpg prod\images\main-image.jpg
copy images\yolanda-image.jpeg prod\images\yolanda-image.jpeg

copy open-sans\OpenSans-Regular.ttf prod\open-sans\OpenSans-Regular.ttf

copy bootstrap\css\bootstrap.min.css prod\bootstrap\css\bootstrap.min.css
minify presentation.css -o prod\presentation.css
minify presentation.css -o presentation.css

htmlmin index.html -o prod\index.html
htmlmin contact.html -o prod\contact.html
htmlmin appointment-info.html -o prod\appointment-info.html
