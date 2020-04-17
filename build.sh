cp files/press-release.pdf prod/files/press-release.pdf
cp files/bowenwork-brochure.pdf prod/files/bowenwork-brochure.pdf

cp images/main-image-mobile.jpg prod/images/main-image-mobile.jpg
cp images/main-image.jpg prod/images/main-image.jpg
cp images/yolanda-image.jpeg prod/images/yolanda-image.jpeg

cp open-sans/OpenSans-Regular.ttf prod/open-sans/OpenSans-Regular.ttf

cp bootstrap/css/bootstrap.min.css prod/bootstrap/css/bootstrap.min.css
yarn exec minify presentation.css -o prod/presentation.css
yarn exec minify presentation.css -o presentation.css

yarn exec htmlmin index.html -o prod/index.html
yarn exec htmlmin contact.html -o prod/contact.html
yarn exec htmlmin appointment-info.html -o prod/appointment-info.html