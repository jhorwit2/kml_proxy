kml_proxy
=========

This is a very simple server implementation that is used to convert KML strings into documents that can be downloaded.

The Google V3 KML object does not allow for string data at the time of creation and only allows URLs. For this reason I created this proxy server. 

It is very basic and should be used with caution. 


=========
# Installation Instructions

Ensure that you are located in the root directory of the project.

In the termal enter:
```javascript
npm install
```

### Change Port

#### Option 1. Open the app.js file located in the root directory with your favorite text editor. 
```javascript
on line 73 - Change 3001 to whatever you wish. 
app.set('port', process.env.PORT || 3001);
```

#### Option 2:

Enter the following when you run node from the terminal.
```bash
PORT=1234 node app.js
```
