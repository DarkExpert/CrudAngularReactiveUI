# SDWroxUserInterface Deployment Steps


To Deploy your application in IIS follow the below steps.

Step 1: Build your Angular application using command ng build --prod

Step 2: After build all files are stored in dist folder of your application path.

Step 3: Create a folder in C:\inetpub\wwwroot by name 'YourProjectName'.

Step 4: Copy the contents of dist folder to C:\inetpub\wwwroot\QRCode folder.

Step 5: Open IIS Manager using command (Window + R) and type inetmgr click OK.

Step 6: Right click on Default Web Site and click on Add Application.

Step 7: Enter Alias name 'YourProjectName' and set the physical path to C:\inetpub\wwwroot\YourProjectName.

Step 8: Open index.html file and find the line href="\" and remove '\'.

Step 9: Now browse application in any browser.

You can also follow the video for better understanding.
